import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/redux/store';


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
        addCard: (state, action : {payload: StudyCard, type: string}) => {
            
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