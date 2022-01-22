import React from 'react'
import {MemberMain} from '../Components/Member/MemberMain'
import {Layout} from '../Components/Layout/Layout'
import {useLocation} from 'react-router-dom'

export const AddMember = () => {
    const location = useLocation()
    const groupname= location.state?.groupname||''
    const adminid = location.state?.adminid||''
    return(
        <Layout title="Team's/Board's" index={8}>
            <MemberMain groupname={groupname} adminid={adminid}/>
        </Layout>
    );
}