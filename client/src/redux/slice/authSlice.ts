import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit";
import instance from "../../axios";
import { ILogin, IRegister, IToken } from "../../interfaces/authInterface";


export const registerUser = createAsyncThunk<IToken, IRegister>(
    'auth/registerUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance.post('/register', data)
            return response.data.token
        } catch (err: any) {
            throw rejectWithValue(err.response.data.message)
        }
    }
)

export const loginUser = createAsyncThunk<IToken, ILogin>(
    'auth/loginUser',
    async (data, { rejectWithValue }) => {
        try {
            const response = await instance.post('/login', data)
            return response.data.token
        } catch (err: any) {
            throw rejectWithValue(err.response.data.message)
        }
    }
)

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

type TToken = {
    token: string,
    loading: boolean,
    error: null | string
}

const initialState: TToken = {
    token: '',
    loading: false,
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.token = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.error = null
                state.loading = true
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false
                document.cookie = `auth=${action.payload}`
            })
            .addCase(loginUser.pending, (state) => {
                state.error = null
                state.loading = true
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false
                document.cookie = `auth=${action.payload}`
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default authSlice.reducer
export const { logOut } = authSlice.actions