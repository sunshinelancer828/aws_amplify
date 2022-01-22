import React from 'react'
import {SettingMain} from "../Components/Settings/SettingMain"
import { Layout } from '../Components/Layout/Layout';

export const Settings = () => {
    return(
        <Layout title="Settings" index={10}>
            <SettingMain/>
        </Layout>
    );
}