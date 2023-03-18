import {createSlice} from '@reduxjs/toolkit'

const currencySlice = createSlice({
    name: 'currency',
    initialState: {
        currentCurrency: '',
        result: '',
    },

}) 