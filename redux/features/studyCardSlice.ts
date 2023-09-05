import { createSlice } from '@reduxjs/toolkit';
import * as uuid from 'uuid';


export interface StudyCard {
    id: string
    question: string
    answer: string
}

export interface StudyCardState {
    studyCards: StudyCard[]
}

const initialState: StudyCardState = {
    studyCards: []
}

export const studyCardSlice = createSlice({
    name: 'studyCard',
    initialState,
    reducers: {
        addCard: (state, action : {payload: Omit<StudyCard, 'id'>, type: string}) => {
            const studyCard = {
                id: uuid.v4(),
                question: action.payload.question,
                answer: action.payload.answer
            }
            state.studyCards.push(studyCard);
        },
        removeCard: (state, action : {payload: string, type: string}) => {
            for(let i = 0; i < state.studyCards.length; i++){
                if(state.studyCards[i].id === action.payload) {
                    state.studyCards = [
                        ...state.studyCards.slice(0, i),
                        ...state.studyCards.slice(i+1)
                    ]
                }
            }
        },
        editCard: (state, action : {payload: StudyCard, type: string}) => {
            for(let i = 0; i < state.studyCards.length; i++){
                if(state.studyCards[i].id === action.payload.id) {
                    state.studyCards = [
                        ...state.studyCards.slice(0, i),
                        action.payload,
                        ...state.studyCards.slice(i+1)
                    ]
                }
            }
        },
        clearStorage: state => {
            state.studyCards = [];
        }
    }
});

export const { addCard, removeCard, editCard, clearStorage } = studyCardSlice.actions;

export default studyCardSlice.reducer;