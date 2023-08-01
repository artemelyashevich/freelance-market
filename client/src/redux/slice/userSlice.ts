import { createSlice, createAsyncThunk, AnyAction, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../interfaces/userInterface"
import { IToken } from "../../interfaces/authInterface"
import instance from "../../axios"


export const getUser = createAsyncThunk<IUser, IToken>(
    'user/getUser',
    async (token, { rejectWithValue }) => {
        try {
            const response = await instance.get('/user', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return response.data
        } catch (error: any) {
            throw rejectWithValue(error.response.data.message)
        }
    }
)

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

type TUser = {
    user: IUser,
    loading: boolean,
    error: null | string
}

const initialState: TUser = {
    user: {
        name: '',
        email: '',
        status: '',
        description: '',
        _id: '',
        __v: '',
        resume: '',
        professions: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        image: ''
    },
    loading: false,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUser.pending, (state) => {
                state.error = null
                state.loading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
            })
            .addMatcher(isError, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.loading = false
            })
    }
})

export default userSlice.reducer