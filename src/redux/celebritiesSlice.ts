import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICelebrity } from '../types/celebrity'

export interface CelebritiesState {
    celebritiesList: Array<ICelebrity>
}

const initialState: CelebritiesState  = {
    celebritiesList: []
}

export const counterSlice = createSlice({
    name: 'Celebrities',
    initialState,
    reducers: {
        setCelebrities: (state: CelebritiesState, action: PayloadAction<Array<ICelebrity>>) => {
            state.celebritiesList = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {  setCelebrities } = counterSlice.actions

export default counterSlice.reducer