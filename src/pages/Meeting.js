import React from 'react'
import {MeetingMain} from "../Components/Meeting/MeetingMain"
import { Layout } from '../Components/Layout/Layout';

export const Meeting = () => {
    return(
        <Layout title="Meeting's Manager" index={2}>
            <MeetingMain/>
        </Layout>
    );
}