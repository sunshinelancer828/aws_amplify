import React from 'react'
import {OtherMain} from "../Components/Other/OtherMain"
import { Layout } from '../Components/Layout/Layout';

export const Other = () => {
    return(
        <Layout title="Others" index={9}>
            <OtherMain/>
        </Layout>
    );
}