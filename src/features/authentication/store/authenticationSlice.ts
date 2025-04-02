import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AuthState  = {
    token: string | null;
}

const initialState: AuthState = {
    token: localStorage.getItem("TOKEN") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // I will save token in localStorage and the store
        //  to be easier to identify if the user logged out
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem("TOKEN", action.payload); 
        },
        clearToken: (state) => {
            state.token = null;
            localStorage.removeItem("TOKEN");
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
