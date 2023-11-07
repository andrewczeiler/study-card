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
import ViewStudyCard from './ViewStudyCard';
import GameViewStudyCard from './GameViewStudyCard';


interface QuestionAnswerCardProps {
    gameStudyCard: GameStudyCard
}

export default function QuestionAnswerCard(props: QuestionAnswerCardProps){
    const { gameStudyCard } = props;
    const [ answer, setAnswer ] = React.useState('');
    const [ question, setQuestion ] = React.useState('');
    const [ fixMistake, setFixMistake ] = React.useState(false);

    const dispatch = useAppDispatch();

    const studyCard = gameStudyCard.studyCard;

    const checkAnswer = () => {
        if(!fixMistake) {
            if(studyCard.answer.toLocaleLowerCase() === answer.toLocaleLowerCase()) dispatch(setCorrect(studyCard.id));
            else setFixMistake(true);
        }
        else {
            if (studyCard.answer.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
                dispatch(setIncorrect(studyCard.id));
                setFixMistake(false);
            }
        }
        
        setAnswer('');
    }
    const checkQuestion = () => {
        if(!fixMistake) {
            if(studyCard.question.toLocaleLowerCase() === question.toLocaleLowerCase()) dispatch(setCorrect(studyCard.id));
            else setFixMistake(true);
        }
        else {
            if (studyCard.question.toLocaleLowerCase() === question.toLocaleLowerCase()) {
                dispatch(setIncorrect(studyCard.id));
                setFixMistake(false);
            }
        }


        setQuestion('');
    }


    return (
        <Box
            display='flex'
            flexDirection='column'
            rowGap='32px'
        >
            { fixMistake ?
                <GameViewStudyCard studyCard={gameStudyCard.studyCard} />
                :
                null
            }
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
                            <div>
                                <Button variant='outlined' onClick={checkQuestion} >
                                    Check Question
                                </Button>
                            </div>
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
                            <div>
                                <Button variant='outlined' onClick={checkAnswer} >
                                    Check Answer
                                </Button>
                            </div>
                        </>
                    }
                </Box>
            </Paper>
        </Box>
    )
}