import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';
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
            state.studyCards.push(studyCard)
        },
        removeCard: (state, action : {payload: string, type: string}) => {
            
        },
        editCard: (state, action : {payload: string, type: string}) => {
            
        },
        clearStorage: state => {
            state.studyCards = [];
        }
    }
});

export const { addCard, removeCard, editCard, clearStorage } = studyCardSlice.actions;

// export const selectItemCount = (state: RootState) => state.shoppingCart.totalItems;

export default studyCardSlice.reducer;