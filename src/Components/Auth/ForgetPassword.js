import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { TextField,Typography, Button, CircularProgress, Box} from "@mui/material";
import {styled} from '@mui/styles'
import {useStyle} from './Style'
import { toast } from 'react-toastify';
import {useInput} from '../../utils/forms'

const CheckButton = styled(Button)({
  padding: '10px 20px !important',
  background: 'green !important',
  fontSize: '20px !important',
  color: 'white !important',
})

export default function ForgetPassword() {
  const classes=useStyle()
  const { value: email, bind: bindEmail } = useInput("");
  const { value: code, bind: bindCode } = useInput("");
  const { value: password, bind: bindPassword } = useInput("");
  const { value: confirmPassword, bind: bindConfirmPassword } = useInput("");
  const [codeSent, setCodeSent] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isSendingCode, setIsSendingCode] = useState(false);

  function validateCodeForm() {
    return email.length > 0;
  }

  function validateResetForm() {
    return (
      code.length > 0 &&
      password.length > 0 &&
      password === confirmPassword
    );
  }

  async function handleSendCodeClick(event) {
    event.preventDefault();

    setIsSendingCode(true);

    try {
      await Auth.forgotPassword(email);
      setCodeSent(true);
    } catch (error) {
      toast.error(error.message)
      setIsSendingCode(false);
    }
  }

  async function handleConfirmClick(event) {
    event.preventDefault();

    setIsConfirming(true);

    try {
      await Auth.forgotPasswordSubmit(
        email,
        code,
        password
      );
      setConfirmed(true);
    } catch (error) {
      toast.error(error.message)
      setIsConfirming(false);
    }
  }

  function renderRequestCodeForm() {
    return (
      <form className={classes.forgotform} onSubmit={handleSendCodeClick}>
        <Typography>Email</Typography>
        <TextField autoFocus type="email" {...bindEmail}/>
        <CheckButton type="submit" disabled={!validateCodeForm()} sx={{marginTop: '20px'}}>
          {isSendingCode && <CircularProgress size={20} style={{ marginRight: 20 }} />}
          Send Confirmation
        </CheckButton>
      </form>
    );
  }

  function renderConfirmationForm() {
    return (
      <form className={classes.forgotform} onSubmit={handleConfirmClick}>
        <Typography>Confirmation Code</Typography>
        <TextField autoFocus type="tel" {...bindCode}/>
        <Typography>
          Please check your email ({email}) for the confirmation code.
        </Typography>
        <Typography sx={{marginTop: '20px'}}>New Password</Typography>
        <TextField type="password" {...bindPassword}/>
        <Typography>Confirm Password</Typography>
        <TextField type="password" {...bindConfirmPassword}/>
        <CheckButton type="submit" disabled={!validateResetForm()}>
          {isConfirming && <CircularProgress size={20} style={{ marginRight: 20 }} />}
          Confirm
        </CheckButton>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <Box sx={{display:'flex', justifyContent:  'center', width: '100%', marginTop: '200px'}}>
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmationForm()
        : renderSuccessMessage()}
    </Box>
  );
}