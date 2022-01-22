import React from 'react'
import {FaqMain} from "../Components/Faq/FaqMain"
import { Layout } from '../Components/Layout/Layout';

export const Faq = () => {
    return(
        <Layout title="Faq" index={5}>
            <FaqMain/>
        </Layout>
    );
}