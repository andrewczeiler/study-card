'use client';

import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { setCorrect, setIncorrect } from '@/redux/features/playGameSlice';
import { useAppDispatch } from '@/redux/hooks';
import Typography from '@mui/material/Typography';
import { GameStudyCard } from '@/types/GameStudyCard';


interface QuestionAnswerCardProps {
    gameStudyCard: GameStudyCard
}

export default function QuestionAnswerCard(props: QuestionAnswerCardProps){
    const { gameStudyCard } = props;
    const [ answer, setAnswer ] = React.useState('');
    const [ question, setQuestion ] = React.useState('');

    const dispatch = useAppDispatch();

    const studyCard = gameStudyCard.studyCard;

    const checkAnswer = () => {
        if(studyCard.answer.toLocaleLowerCase() === answer.toLocaleLowerCase()) dispatch(setCorrect(studyCard.id));
        else dispatch(setIncorrect(studyCard.id));
        setAnswer('');
    }
    const checkQuestion = () => {
        if(studyCard.question.toLocaleLowerCase() === question.toLocaleLowerCase()) dispatch(setCorrect(studyCard.id));
        else dispatch(setIncorrect(studyCard.id));
        setQuestion('');
    }

    return (
        <Paper> 
            <Box
                p='32px'
                display='flex'
                flexDirection='column'
                rowGap='16px'
            >
                { gameStudyCard.type === 'Q' ?
                    <>
                        <TextField 
                            variant='outlined' 
                            label='Question' 
                            value={question} 
                            onChange={(e) => setQuestion(e.target.value)}  
                            fullWidth
                            multiline 
                        />
                        <Typography fontSize='1.8em'>
                            { 'Answer: ' + studyCard.answer }
                        </Typography>
                        <Button variant='outlined' onClick={checkQuestion} >
                            Check Question
                        </Button>
                    </>
                    :
                    <>
                        <Typography fontSize='1.8em'>
                            { 'Question: ' + studyCard.question }
                        </Typography>
                        <TextField 
                            variant='outlined' 
                            label='Answer' 
                            value={answer} 
                            onChange={(e) => setAnswer(e.target.value)} 
                            multiline 
                        />
                        <Button variant='outlined' onClick={checkAnswer} >
                            Check Answer
                        </Button>
                    </>
                }
            </Box>
        </Paper>
    )
}