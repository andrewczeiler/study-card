'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { StudyCard } from '@/redux/features/studyCardSlice';
import Typography from '@mui/material/Typography';


interface ViewStudyCardProps {
    studyCard: StudyCard
}
export default function ViewStudyCard(props : ViewStudyCardProps){
    const { studyCard } = props;


    return (
        <Paper sx={{width: '43%'}}> 
            <Box p='24px' >
                <Typography>
                    { 'Q: ' + studyCard.question }
                </Typography>
                <Typography>
                    { 'A: ' + studyCard.answer }
                </Typography>
            </Box>
        </Paper>
    )
}