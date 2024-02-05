import {createSlice, configureStore, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    movies: [],
    genresLoaded: false,
    genres: []
}

export const NetflixSlice = createSlice({
    name: 'netflix',
    initialState,
    extraReducers: (builder)=> {}
})

export const store = configureStore({
    reducer: {
        netflix: NetflixSlice.reducer
    }
})