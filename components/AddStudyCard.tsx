'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { addCard } from '@/redux/features/studyCardSlice';
import { useAppDispatch } from '@/redux/hooks';

// Could make this a modal, where there's a button on the main page and clicking the button will open this in the modal to add a study card
// Could also make study card setes 
export default function AddStudyCard(){
    const [ question, setQuestion ] = React.useState('');
    const [ answer, setAnswer ] = React.useState('');

    const dispatch = useAppDispatch();

    function addStudyCard(){
        if(question && answer) {
            const studyCard = {
                question,
                answer
            }
            dispatch(addCard(studyCard));
        }
    }

    return (
        <Paper>
            <Box
                p='32px'
                display='flex'
                flexDirection='column'
                rowGap='16px'
            >
                <TextField variant='outlined' label='Question' onChange={(e) => setQuestion(e.target.value)}  multiline />
                <TextField variant='outlined' label='Answer' onChange={(e) => setAnswer(e.target.value)} multiline />
                <Button variant='outlined' onClick={addStudyCard} > 
                    Add Study Card
                </Button>
            </Box>
        </Paper>
    )
}