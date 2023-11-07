'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { removeCard } from '@/redux/features/studyCardSlice';
import { useAppDispatch } from '@/redux/hooks';
import EditStudyCard from './EditStudyCard';
import { StudyCard } from '@/types/StudyCard';


interface GameViewStudyCardProps {
    studyCard: StudyCard
}

export default function GameViewStudyCard(props : GameViewStudyCardProps){
    const { studyCard } = props;

    const [ anchorEl, setAnchorEl ] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const dispatch = useAppDispatch();

    const handleClose = () => setAnchorEl(null);
    const handleDelete = () => {
        dispatch(removeCard(studyCard.id))
        handleClose();
    }


    return (
        <Paper sx={{width: '100%'}}>
            <Box 
                p='24px'
                display='flex'
                flexDirection='column'
                rowGap='32px' 
            >
                <Typography fontSize='1.8em'>
                    { 'Question: ' + studyCard.question }
                </Typography>
                <Typography fontSize='1.8em'>
                    { 'Answer: ' + studyCard.answer }
                </Typography>
            </Box>
        </Paper>
    )
}