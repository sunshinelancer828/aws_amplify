import React from 'react'
import { Layout } from '../Components/Layout/Layout'
import {DashboardMain} from '../Components/Dashboard/DashboardMain'
export const Dashboard = () => {
    return(
        <Layout title="Dashboard" index={1}>
            <DashboardMain/>
        </Layout>
    );
}