import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    token: 'kapalik',
    id: '',
    userDetails: {},
    isLoggedIn: false
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginDetails: (state, actions) => {
            const { token, isLoggedIn, userDetails } = actions.payload
            return {
                ...state,
                token,
                isLoggedIn,
                userDetails


            }

        },
        logout: (state) => {

        },
    }
});

export const { setLoginDetails, logout } = userSlice.actions;
export default userSlice.reducer;