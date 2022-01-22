import React from 'react'
import {ReportMain} from "../Components/Report/ReportMain"
import { Layout } from '../Components/Layout/Layout';

export const Report = () => {
    return(
        <Layout title="Report" index={7}>
            <ReportMain/>
        </Layout>
    );
}