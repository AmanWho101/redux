import { configureStore} from '@reduxjs/toolkit'
import movieR from './movieSlice'

export const store = configureStore({
    reducer: {
        movie: movieR
    }
})