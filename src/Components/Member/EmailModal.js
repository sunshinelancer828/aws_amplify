import React from 'react'
import { toast } from 'react-toastify'
import { styled } from '@mui/styles'
import { Typography, TextField, Button } from '@mui/material'
import { API } from 'aws-amplify'
import { createCandidate } from '../../graphql/mutations'
import { useStyle } from './Style'
import { useInput } from '../../utils/forms'

const ProfileLabel = styled(Typography)({
    color: 'white',
    paddingLeft: '10px',
    fontSize: '20px !important',
    margin: '10px 0px !important',
})

const ProfileTextField = styled(TextField)({
    background: 'white',
})

export const EmailModal = ({fromid, fromemail, onClose, organization}) => {
    const classes = useStyle()
    const { value: toemail, bind: bindEmail} = useInput('')
    const { value: firstname, bind: bindFirstName} = useInput('')
    const { value: lastname, bind: bindLastName} = useInput('')
    const handleContactFormSubmit = async (e) => {
        e.preventDefault()
          try {
            // TODO: Add code to send email here
            console.log(fromemail)
            await API.graphql({
              query: createCandidate,
              variables: {
                input: {
                    sourceid: fromid,
                    fromemail: fromemail,
                    toemail: toemail,
                    firstname: firstname,
                    lastname: lastname,
                    organization: organization,
                },
              },
            })
            toast.success('Successfully submitted!')
            onClose()
          } catch (e) {
            console.log(e.message)
            toast.error(e.message)
          }
      }

    return(
        <form onSubmit={handleContactFormSubmit} className={classes.emailsendmodal}>
            <ProfileLabel>First Name</ProfileLabel>
            <ProfileTextField placeholder="First Name" type='text' {...bindFirstName}></ProfileTextField>
            <ProfileLabel>Last Name</ProfileLabel>
            <ProfileTextField placeholder="Last Name" type='text' {...bindLastName}></ProfileTextField>
            <ProfileLabel>Email</ProfileLabel>
            <ProfileTextField placeholder="Email" type='email' {...bindEmail}></ProfileTextField>
            <Button type="submit">Submit</Button>                  
        </form>
    )
}