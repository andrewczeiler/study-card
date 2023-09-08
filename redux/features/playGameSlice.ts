import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';
import { StudyCard } from '@/types/StudyCard';
import { GameStudyCard } from '@/types/GameStudyCard';


export interface GameStudyCardState {
    studyCards: GameStudyCard[]
}

const initialState: GameStudyCardState = {
    studyCards: []
}

export const studyCardSlice = createSlice({
    name: 'playGame',
    initialState,
    reducers: {
        startGame: (state, action : {payload: StudyCard[], type: string}) => {
            const studyCards = action.payload;
            let gameStudyCards: GameStudyCard[];
            gameStudyCards = studyCards.map((studyCard) => {
                const random = Math.floor(Math.random()*2)
                return {
                    studyCard,
                    type: random === 0 ? 'Q' : 'A',
                    status: 'INIT'
                }
            })

            state.studyCards = gameStudyCards;
        },
        setCorrect: (state, action : {payload: string, type: string}) => {
            state.studyCards = state.studyCards.map((studyCard) => {
                if(studyCard.studyCard.id !== action.payload) return studyCard;

                return {
                    studyCard: studyCard.studyCard,
                    type: studyCard.type,
                    status: 'CORRECT'
                }
            })
        },
        setIncorrect: (state, action : {payload: string, type: string}) => {
            state.studyCards = state.studyCards.map((studyCard) => {
                if(studyCard.studyCard.id !== action.payload) return studyCard;

                return {
                    studyCard: studyCard.studyCard,
                    type: studyCard.type,
                    status: 'INCORRECT'
                }
            })
        },
        restartGame: state => {
            state.studyCards = [];
        }
    }
});

export const { startGame, restartGame, setCorrect, setIncorrect } = studyCardSlice.actions;

export default studyCardSlice.reducer;