import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialUserState, { type UserState } from './slices/userSlice'
import initialLoadingState from './slices/loadingSlice'
import initialUserSidebarOpen from './slices/userSidebarOpenSlice'
import UserInfoSidebar from '@/app/components/sidebars/UserInfoSidebar'

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


const userSidebarOpenSlice = createSlice({
    name: 'userInfoSidebar',
    initialState: initialUserSidebarOpen,
    reducers: {
        userInfoSidebarToggle: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})


export const { setUser, clearUser } = userSlice.actions
export const { startLoading, stopLoading } = loadingSlice.actions
export const { userInfoSidebarToggle } = userSidebarOpenSlice.actions

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userSlice.reducer,
            loading: loadingSlice.reducer,
            userSidebar: userSidebarOpenSlice.reducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
