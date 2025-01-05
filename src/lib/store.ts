import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialUserState, { type UserState } from './slices/userSlice'
import initialLoadingState from './slices/loadingSlice'

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            return { ...state, ...action.payload }
        },
        clearUser: () => initialUserState
    }
})

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialLoadingState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true
        },
        stopLoading: (state) => {
            state.isLoading = false
        }
    }
})

export const { setUser, clearUser } = userSlice.actions
export const { startLoading, stopLoading } = loadingSlice.actions

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userSlice.reducer,
            loading: loadingSlice.reducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
