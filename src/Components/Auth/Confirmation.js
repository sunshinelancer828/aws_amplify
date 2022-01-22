import React, {useState} from 'react'
import {Button, Typography, Box, CircularProgress} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import {styled} from '@mui/styles'
import { toast } from 'react-toastify';
import { Auth, API, graphqlOperation } from "aws-amplify"
import { updateUser } from "../../graphql/mutations"

const GoButton = styled(Button)({
    color: 'white !important',
    fontSize: '30px !important',
    background: 'green',
    marginTop: '50px',
    width: '40%',
})

export const Confirmation = () => {
    const [loading, setLoading] = useState(false)
    const [term, setTerm] = useState(false)
    const navigate = useNavigate();
    
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
    
    const termChange = () => {
        setTerm(!term)
    }

    const gotoLogin = async(event) => {
      event.preventDefault();
      if(!term){
          toast.error('You must agree on Terms of Service')
      }
      else{
        var request = GetRequest(window.location);
        var id = request.id || '';
        var email = request.email || '';
        var password = request.password || '';
        const crypto = require("crypto")
        const decipher = crypto.createDecipheriv(process.env.REACT_APP_ALGORITHM, process.env.REACT_APP_SECURITYKEY, process.env.REACT_APP_INITVECTOR);
        let decryptedData = decipher.update(password, "hex", "utf-8");
        decryptedData += decipher.final("utf-8");
        try {
            setLoading(true)
            const updateDetails = {
                id: id,
                term: '1',
            };
            await API.graphql(graphqlOperation(updateUser, {input: updateDetails}))
            await Auth.signIn(email, decryptedData);
            navigate("/welcome");
        } catch (error) {
            toast.error(error.message)
        }
        setLoading(false)
      }
    };

    return(
        <Box sx={{display:'flex', justifyContent: 'center', width: '100%'}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginTop: '200px'}}>
                <Typography sx={{fontSize: '100px'}}>Congratulations!</Typography>
                <Typography sx={{fontSize: '48px'}}>Your account has been successfully confirmed</Typography>
                <Box>
                    <label className="form-control">
                        <input type="checkbox" name="checkbox" checked={term} onChange={termChange}/>
                        Your must agree on Terms of Service
                    </label>
                </Box>
                <Box sx={{display:'flex', justifyContent:'center', width: '100%'}}>
                    <GoButton onClick={gotoLogin}  disabled={loading}>
                        {loading && <CircularProgress size={20} style={{ marginRight: 20 }} />}
                        Let's get Started
                    </GoButton>
                </Box>
            </Box>
        </Box>
    );
}