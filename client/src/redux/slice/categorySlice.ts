import {createSlice, createAsyncThunk, AnyAction, PayloadAction} from '@reduxjs/toolkit'
import ICategory from '../../interfaces/categoryInterface'
import instance from '../../axios'


export const findAllCategories =  createAsyncThunk<ICategory[]>(
    'category/findAllCategories',
    async () => {
        const response = await instance.get('/category')
        return response.data
    }
)

type TCategory = {
    categories: ICategory[],
    loading: boolean,
    error: null | string
}

const initialState:TCategory = {
    categories: [],
    loading: false,
    error: null
} 

const isError = (action: AnyAction) => {
    return action.type.endsWith('rejected')
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(findAllCategories.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(findAllCategories.fulfilled, (state, action) => {
            state.loading = false
            state.categories = action.payload
        })
        .addMatcher(isError, (state, action: PayloadAction<string>) => {
            state.error = action.payload
            state.loading = false
        })
    }
})

export default categorySlice.reducer
