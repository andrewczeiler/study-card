'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { editCard } from '@/redux/features/studyCardSlice';
import { useAppDispatch } from '@/redux/hooks';
import { StudyCard } from '@/types/StudyCard';


interface EditStudyCardProps {
    studyCard: StudyCard
    exitEditMode: () => void
}

export default function EditStudyCard(props: EditStudyCardProps){
    const { studyCard, exitEditMode } = props;
    const [ question, setQuestion ] = React.useState(studyCard.question);
    const [ answer, setAnswer ] = React.useState(studyCard.answer);

    const dispatch = useAppDispatch();

    function editStudyCard(){
        if(question && answer) {
            const editedStudyCard = {
                id: studyCard.id,
                question,
                answer
            }

            exitEditMode();

            dispatch(editCard(editedStudyCard));
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
                <TextField 
                    variant='outlined' 
                    label='Question' 
                    value={question} 
                    onChange={(e) => setQuestion(e.target.value)}  
                    fullWidth
                    multiline 
                />
                <TextField 
                    variant='outlined' 
                    label='Answer' 
                    value={answer} 
                    onChange={(e) => setAnswer(e.target.value)} 
                    fullWidth
                    multiline 
                />
                <Button variant='outlined' onClick={editStudyCard} > 
                    Update Study Card
                </Button>
            </Box>
        </Paper>
    )
}