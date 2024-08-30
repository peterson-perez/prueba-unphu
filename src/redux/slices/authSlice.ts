import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthInterface } from "../../models/AuthInterface";


const initialState: AuthInterface = {
    email: '',
    password: '',
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<AuthInterface>) {
            const { payload } = action
            state.email = payload.email;
            state.password = payload.password;
        },
        logout(state) {
            state.email = initialState.email;
            state.password = initialState.password;
        }
    },
})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;