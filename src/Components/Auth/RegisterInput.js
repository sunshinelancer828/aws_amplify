import React, {useState, useEffect} from "react"
import {styled} from "@mui/styles"
import {Box, Button, TextField, Grid,CircularProgress} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import { Auth } from "aws-amplify"
import {useStyle} from './Style'
import {useInput} from '../../utils/forms'
import { toast } from 'react-toastify';
import { getPermissionInformation } from "../../redux/actions/auth"
import { useDispatch, useSelector } from "react-redux"

const Field = styled(TextField)({
    borderRadius: '15px',
    background: '#c7c7ff',
    margin: '10px 0px !important',
});

export const RegisterInput=()=>{
    function GetRequest(location) {
        var url = location.search;
        var theRequest = {};
        if (url.indexOf('?') !== -1) {
            var str = url.substr(1);
            var strs = str.split('&');
            var item, index, key, value
            for (var i = 0; i < strs.length; i++) {
                item = strs[i]
                index = item.indexOf('=')
                key = item.substr(0, index)
                value = item.substr(index + 1)
                theRequest[key] = unescape(value)
            }
        }
        return theRequest;
    };

    const dispatch = useDispatch()
    const authdata = useSelector(state=>state.userAttributes)
    const {userAttributes, load} = authdata
    const[firstname, setFirstName] = useState()
    const [lastname, setLastName] = useState()
    const [email, setEmail] = useState()
    const [organization, setOrganization] = useState()
    useEffect(() => {
        async function fetchdata(){
            var request = GetRequest(window.location);
            var id = request.identity || ''
            try{
                dispatch(getPermissionInformation(id))
                setPermission('1')
            }
            catch(error)
            {
                console.log(error.message)
                setPermission('0')
            }
        }
        fetchdata()
    }, [dispatch])

    useEffect(() => {
        setFirstName(userAttributes?.firstname||'')
        setLastName(userAttributes?.lastname||'')
        setEmail(userAttributes?.toemail||'')
        setOrganization(userAttributes?.organization||'')
    }, [load])

    const classes=useStyle();
    const { value: password, bind: bindPassword } = useInput("");
    const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");
    const [permission, setPermission] = useState('0')
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleChange1 = (event) => {
        setFirstName(event.target.value)
    }

    const handleChange2 = (event) => {
        setLastName(event.target.value)
    }

    const handleChange3 = (event) => {
        setOrganization(event.target.value)
    }

    const handleChange4 = (event) => {
        setEmail(event.target.value)
    }

    const handleSignUp = async (event) => {
        event.preventDefault();
        setLoading(true);
        if (password !== confirmPassword) {
            toast.error('Password and Confirm Password should be equal')
            setLoading(false);
            return;
        }
        try {
            const crypto = require("crypto")
            const cipher = crypto.createCipheriv(process.env.REACT_APP_ALGORITHM, process.env.REACT_APP_SECURITYKEY, process.env.REACT_APP_INITVECTOR)
            let encryptedData = cipher.update(confirmPassword, "utf-8", "hex")
            encryptedData += cipher.final("hex");
            await Auth.signUp({
                username: email,
                password: confirmPassword,
                attributes: {
                    email,
                    family_name: firstname,
                    given_name: lastname,
                    'custom:organization': organization,
                    'custom:password': encryptedData,
                    'custom:permission': permission,
                    'custom:term': '0',
                }
            });
            toast.success('Registration Success')
            navigate("/wait")
        } catch (error) {
            console.log(error.message)
            toast.error(error.message)
        }
        setLoading(false);
    };
      
    return(
        <Grid item xs={12} md={12} lg={7} sx={{padding: { md: '0 60px', sm: '0 10px'}}}>
            <form className={classes.rightBoard} onSubmit={handleSignUp}>
                <Grid container columnSpacing={1}>
                    <Grid item xs={12} md={6}>
                        <Field className="registerinput" fullWidth placeholder="First Name" value={firstname} onChange={handleChange1}/>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Field className="registerinput" fullWidth placeholder="Last Name" value={lastname} onChange={handleChange2}/>
                    </Grid>
                </Grid>
                <Box>
                    <Field className="registerinput" placeholder="Organization" fullWidth value={organization} onChange={handleChange3}/>
                </Box>
                <Box>
                    <Field className="registerinput" fullWidth placeholder="E-mail" type="email" value={email} onChange={handleChange4}/>
                </Box>
                <Box>
                    <Field className="registerinput" fullWidth placeholder="Password" type="password" {...bindPassword}/>
                </Box>
                <Box>
                    <Field className="registerinput" placeholder="Confirm Password" fullWidth type="password" {...bindConfirmPassword}/>
                </Box>
                <Grid container className={classes.bottombutton}>
                    <Grid xs={12} sm={6} item sx={{padding: '0px 10px'}}>
                        <Link className={classes.navigate} to="/login">
                            <Button className={classes.goLoginBtn}>
                                Existing User Login
                            </Button>
                        </Link>
                    </Grid>
                    <Grid xs={12} sm={6} item sx={{padding: '0px 10px'}}>
                        <Button className={classes.registerBtn} disabled={loading} type="submit">
                            {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Grid>
    )
}