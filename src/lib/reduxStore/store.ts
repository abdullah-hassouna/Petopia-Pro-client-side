import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialUserInfoState, { type UserInfoState } from './slices/userInfoSlice';
import initialLoadingState from './slices/loadingSlice';
import initialUserSidebarOpen from './slices/userSidebarOpenSlice';

export interface RootState {
    userInfo: UserInfoState;
    loading: typeof initialLoadingState;
    userSidebar: typeof initialUserSidebarOpen;
}

const loadState = (): RootState | undefined => {
    try {
        const serializedState = localStorage.getItem('reduxState');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};


const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('reduxState', serializedState);
    } catch (err) {
        console.log(err)
    }
};

console.log(initialUserInfoState)

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState: initialUserInfoState,
    reducers: {
        setUser: (state, action: PayloadAction<UserInfoState>) => {
            return { ...state, ...action.payload };
        },
        clearUser: () => initialUserInfoState,
    },
});

const loadingSlice = createSlice({
    name: 'loading',
    initialState: initialLoadingState,
    reducers: {
        startLoading: (state) => {
            state.isLoading = true;
        },
        stopLoading: (state) => {
            state.isLoading = false;
        },
    },
});

const userSidebarOpenSlice = createSlice({
    name: 'userInfoSidebar',
    initialState: initialUserSidebarOpen,
    reducers: {
        userInfoSidebarToggle: (state) => {
            state.isOpen = !state.isOpen;
            localStorage.setItem("UserSidebarOpen", String(state.isOpen));
        },
    },
});

export const { setUser, clearUser } = userInfoSlice.actions;
export const { startLoading, stopLoading } = loadingSlice.actions;
export const { userInfoSidebarToggle } = userSidebarOpenSlice.actions;

export const makeStore = () => {
    const preloadedState = loadState(); // Load state from localStorage
    const store = configureStore({
        reducer: {
            userInfo: userInfoSlice.reducer,
            loading: loadingSlice.reducer,
            userSidebar: userSidebarOpenSlice.reducer,
        },
        preloadedState, // Use the loaded state
    });

    store.subscribe(() => {
        saveState(store.getState()); // Save state to localStorage on updates
    });

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
