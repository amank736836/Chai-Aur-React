import {configureStore} from '@reduxjs/toolkit';
import reducers from './authSlice';
const store = configureStore({
    reducer: reducers
    //TODO: add more slices here for posts
});

export default store;