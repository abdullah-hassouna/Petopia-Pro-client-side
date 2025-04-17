interface UserSidebarOpen {
    isOpen: boolean;
}

// Default value for SSR
const defaultState: UserSidebarOpen = { isOpen: true };

// Function to load state from localStorage (client-side only)
const loadStateFromLocalStorage = (): UserSidebarOpen => {
    if (typeof window !== 'undefined' && window.localStorage) {
        const savedState = localStorage.getItem('reduxState');
        if (savedState) {
            const parsedState = JSON.parse(savedState);
            return parsedState.userSidebar || defaultState;
        }
    }
    return defaultState;
};

// Use default state for SSR and load from localStorage on the client
const initialUserSidebarOpen: UserSidebarOpen =
    typeof window === 'undefined' ? defaultState : loadStateFromLocalStorage();

export default initialUserSidebarOpen;