'use client';

import { StudyCard } from '@/types/StudyCard';
import { useAppSelector } from '@/redux/hooks';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import QuestionAnswerCard from './QuestionAnswerCard';
import Button from '@mui/material/Button';


export default function PlayGame(){
    const studyCards = useAppSelector(state => state.playGame.studyCards);

    const initialLength = studyCards.filter((studyCard) => studyCard.status === 'INIT').length;
    const correctLength = studyCards.filter((studyCard) => studyCard.status === 'CORRECT').length;
    const incorrectLength = studyCards.filter((studyCard) => studyCard.status === 'INCORRECT').length;
    const correctnessString = correctLength + '/' + (correctLength + incorrectLength);

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
            rowGap='16px'
        >
            <Typography fontWeight='600' fontSize='1.4em' >
                { 'Score: ' + correctnessString }
            </Typography>
            <Box width='80%' >
                { initialLength ?
                    <QuestionAnswerCard gameStudyCard={studyCards.filter((studyCard) => studyCard.status === 'INIT')[0]} />
                    :
                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='center'
                        alignItems='center'
                        rowGap='12px'
                    >
                        <Typography fontWeight='600' fontSize='1.6em' >
                            All out of cards!
                        </Typography>
                        <Button variant='outlined' onClick={() => location.reload() } >
                            Play Again
                        </Button>
                    </Box> 
                }
            </Box>
        </Box>
    )
}