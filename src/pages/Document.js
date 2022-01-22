import React from 'react'
import {DocumentCenter} from "../Components/DocumentCenter/DocumentCenter"
import { Layout } from '../Components/Layout/Layout';

export const Document = () => {
    return(
        <Layout title="Document Center" index={4}>
            <DocumentCenter/>
        </Layout>
    );
}