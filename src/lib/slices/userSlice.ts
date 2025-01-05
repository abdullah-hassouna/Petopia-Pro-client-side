interface UserState {
    userName: string
    userEmail: string
    userProfile: string
    userToken: string
}

const initialUserState: UserState = {
    userName: "Guest",
    userEmail: "",
    userProfile: "",
    userToken: ""
}

export default initialUserState
export {type UserState}