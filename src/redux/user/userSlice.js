const { createSlice } = require('@reduxjs/toolkit');


const INITIAL_STATE = {
    currentUser:null,
    dataUser:null
}

const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state,action) => {
    
            return {
                ...state,
                currentUser: action.payload,
               
            }

            },
        logOut:  (state, action) => {
            return {
                ...state,
                currentUser:null
            }
        }  
    }
},
)

export const  {setCurrentUser, logOut} = userSlice.actions;

export default userSlice.reducer;