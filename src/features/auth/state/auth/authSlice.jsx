import { createSlice } from "@reduxjs/toolkit";
let authSlice = createSlice({
  name: "auth",
    initialState: {
    employee: null,
    isLoading: false,
    },
    reducers: {
        addEmployee: (state, action) => {
            state.employee = action.payload;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        removeEmployee: (state) => {
            state.employee = null;
             state.isLoading = false;
        }
    },
})

export let { addEmployee, setLoading, removeEmployee } = authSlice.actions;
export default authSlice.reducer;