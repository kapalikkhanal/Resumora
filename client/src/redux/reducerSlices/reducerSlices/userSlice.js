import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    token: 'kepalik',
    userDetails: {},
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginDetails: (state, actions) => {
        },
        logout: (state) => {
            isLoggedIn = false
        },
    }
});

export const { setLoginDetails, logout } = userSlice.actions;
export default userSlice.reducer;