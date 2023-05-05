import { combineReducers, configureStore  } from "@reduxjs/toolkit";
import userSlice from '../redux/user/userSlice'


const store = configureStore({
    reducer:{
        user: userSlice
    }
})

export default store 

