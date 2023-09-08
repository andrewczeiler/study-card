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


interface ViewStudyCardProps {
    studyCard: StudyCard
}

export default function ViewStudyCard(props : ViewStudyCardProps){
    const { studyCard } = props;

    const [ editMode, setEditMode ] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const dispatch = useAppDispatch();

    const handleClose = () => setAnchorEl(null);
    const handleDelete = () => {
        dispatch(removeCard(studyCard.id))
        handleClose();
    }
    const handleEdit = () => {
        setEditMode(true);
        handleClose();
    }
    const exitEditMode = () => setEditMode(false);

    return (
        <Paper sx={{width: '43%'}}>
            {editMode ?
                <EditStudyCard studyCard={studyCard} exitEditMode={exitEditMode} />
                :
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                >
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
                    <Box
                        margin='8px'
                    >
                        <IconButton
                            onClick={(e) => setAnchorEl(e.currentTarget)}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={handleEdit}>Edit</MenuItem>
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                    </Box> 
                </Box>
            }
        </Paper>
    )
}