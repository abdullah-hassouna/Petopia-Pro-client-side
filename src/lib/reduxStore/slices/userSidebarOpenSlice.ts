interface UserSidebarOpen {
    isOpen: boolean;
}

const LSData = Object(localStorage.getItem('reduxState'));

const initialUserSidebarOpen: UserSidebarOpen = LSData.userSidebar || {
    isOpen: true,
}
export default initialUserSidebarOpen
