import React from 'react'
import {TaskMain} from "../Components/Task/TaskMain"
import { Layout } from '../Components/Layout/Layout';

export const Task = () => {
    return(
        <Layout title="Task" index={3}>
            <TaskMain/>
        </Layout>
    );
}