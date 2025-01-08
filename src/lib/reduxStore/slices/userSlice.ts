interface UserState {
    userName: string
    userEmail: string
    userProfile: string
    userToken: string
}

const LSData = Object(localStorage.getItem('reduxState'));

const initialUserState: UserState =
    LSData.user
    ||
    {
        userName: "Guest",
        userEmail: "",
        userProfile: "",
        userToken: ""
    }

export default initialUserState
export { type UserState }