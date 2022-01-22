import React from 'react'
import { ChartMain } from "../Components/Chart/ChartMain"
import { Layout } from '../Components/Layout/Layout';

export const Chart = () => {
    return(
        <Layout title="Chart" index={6}>
            <ChartMain/>
        </Layout>
    );
}