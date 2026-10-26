import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/axiosinstance";



export let loginEmployee = createAsyncThunk("auth/login", async (credentials, thunkAPI) => {
    try {
        let response = await axiosInstance.post("/auth/login", credentials);
        console.log("response", response.data);
        return response.data;
    } catch (error) {
        throw new thunkAPI.rejectWithValue(error);
    }
})