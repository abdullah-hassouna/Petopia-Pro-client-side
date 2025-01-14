interface UserState {
    userName: string
    userEmail: string
    userProfile: string
    userToken: string
}

let LSData: { user: UserState } = {
    user: {
        userName: "",
        userEmail: "",
        userProfile: "",
        userToken: ""
    }
};
if (typeof window !== 'undefined') {
    LSData = Object(localStorage.getItem('reduxState')) 
}

const initialUserState: UserState = LSData?.user|| {
    userName: "",
    userEmail: "",
    userProfile: "",
    userToken: ""
};


export default initialUserState
export { type UserState }