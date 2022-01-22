import React from 'react'
import { TeamMain } from "../Components/Team/TeamMain"
import { Layout } from '../Components/Layout/Layout';

export const Team = () => {
    return(
        <Layout title="Team's/Board's" index={8}>
            <TeamMain/>
        </Layout>
    );
}