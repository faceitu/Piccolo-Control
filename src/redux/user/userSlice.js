const { createSlice } = require('@reduxjs/toolkit');

const INITIAL_STATE = {
    token:null,
    dataUser:null
}

const userSlice = createSlice({
    name: 'token',
    initialState: INITIAL_STATE,
    reducers: {
        setCurrentUser: (state,action) => {
    
            return {
                ...state,
                token: action.payload,
               
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