import React from "react"
import {SnapshotCard} from './SnapshotCard'
import { UpcomingTasksCard } from "./UpcomingTasksCard";
import { UpcomingMeetingsCard } from "./UpcomingMeetingsCard";
import { SignatureCard } from "./SignatureCard";
import { Box } from "@mui/material";

export const DashboardMain = () =>{
    return(
        <Box sx={{paddingBottom: '10px'}}>
            <SnapshotCard/>
            <UpcomingTasksCard/>
            <UpcomingMeetingsCard/>
            <SignatureCard/>
        </Box>
    );
}