import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICelebrity } from '../types/celebrity'

export interface CelebritiesState {
    celebritiesList: Array<ICelebrity>,
    celebritiesShowMode: "list" | "grid"
}

const initialState: CelebritiesState  = {
    celebritiesList: [],
    celebritiesShowMode: "grid"
}

export const counterSlice = createSlice({
    name: 'Celebrities',
    initialState,
    reducers: {
        setCelebrities: (state: CelebritiesState, action: PayloadAction<Array<ICelebrity>>) => {
            state.celebritiesList = action.payload
        },
        setCelebritiesShowMode: (state: CelebritiesState, action: PayloadAction<"list" | "grid">) => {
            state.celebritiesShowMode = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const {  setCelebrities, setCelebritiesShowMode } = counterSlice.actions

export default counterSlice.reducer