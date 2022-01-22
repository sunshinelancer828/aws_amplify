import React, {useState, useEffect} from "react"
import {styled} from "@mui/styles"
import {Box, Button, TextField, Grid, CircularProgress, Typography} from "@mui/material"
import {Link, useNavigate} from "react-router-dom"
import {useStyle} from './Style'
import { Auth } from "aws-amplify";
import { toast } from "react-toastify"

const Field = styled(TextField)({
    borderRadius: '15px',
    background: '#c7c7ff',
    margin: '10px 0px !important'
});

const ForgotLink = styled(Link)({
    textDecoration: 'none',    
})

export const LoginInput=()=>{
    const [loading, setLoading] = useState(false)
    const [rememberMe, setRememberMe] = useState(localStorage.getItem('rememberMe') === 'true')
    const [email, setEmail] = useState(rememberMe ? localStorage.getItem('email') : '')
    const [password, setPassword] = useState(rememberMe ? localStorage.getItem('password') : '')
    const navigate = useNavigate()
    const classes=useStyle()

    

    const rememberMeChange = () => {
        setRememberMe(!rememberMe)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value)
    }

    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        localStorage.setItem('rememberMe', rememberMe)
        localStorage.setItem('email', rememberMe ? email : '')
        localStorage.setItem('password', rememberMe ? password : '')
        try {
            await Auth.signIn(email, password);
            toast.success("Login Success!!")
            navigate("/");
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false);
    };

    useEffect(() => {
        setRememberMe(localStorage.getItem('rememberMe') === 'true')
        setEmail(rememberMe ? localStorage.getItem('email') : '')
        setPassword(rememberMe ? localStorage.getItem('password') : '')
    },[])
    
    return(
        <Grid item xs={12} md={12} lg={7} sx={{padding: { md: '0 60px', sm: '0 10px'}}}>
            <form className={classes.rightBoard} onSubmit={handleSubmit}>
                <Box>
                    <Field className="registerinput" placeholder="E-mail" fullWidth value={email} onChange={changeEmail} type="email"/>
                </Box>
                <Box>
                    <Field className="registerinput" fullWidth placeholder="Password" value={password} type="password" onChange={changePassword}/>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <label className="form-control">
                        <input type="checkbox" name="checkbox" checked={rememberMe} onChange={rememberMeChange}/>
                        Remember Me
                    </label>
                    <ForgotLink to="/forgotpassword">
                        <Typography >Forgot Password?</Typography>
                    </ForgotLink>
                </Box>
                <Grid container sx={{marginTop:'20px'}}>
                    <Grid xs={12} sm={6} item sx={{padding: '0px 10px'}}>
                        <Link className={classes.navigate} to="/register">
                            <Button className={classes.goRegisterBtn}>
                                Register Now
                            </Button>
                        </Link>
                    </Grid>
                    <Grid xs={12} sm={6} item sx={{padding: '0px 10px'}}>
                        <Button className={classes.loginBtn}  disabled={loading} type="submit">
                        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
                            Sign In
                        </Button>
                    </Grid>
                </Grid>
                <Box className={classes.googlepart}>
                    <img className={classes.googlelogo} src="../Images/google.png" alt=''/>
                    <span className={classes.googlesign}>Sign in with Google</span>
                </Box>
            </form>
        </Grid>
    )
}