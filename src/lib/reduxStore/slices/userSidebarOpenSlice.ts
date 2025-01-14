
interface UserSidebarOpen {
    isOpen: boolean;
}

let LSData;
if (typeof window!.localStorage !== 'undefined') {
    LSData = Object(localStorage.getItem('reduxState'));
}

const initialUserSidebarOpen: UserSidebarOpen = LSData.userSidebar || {
    isOpen: true,
}
export default initialUserSidebarOpen
