interface UserInfoState {
    userName: string
    userEmail: string
    userBio: string
    userPhoneNumber: string,
    userProfileImage: string
    userCoverImage: string
    userToken: string
}

let LSData: { user: UserInfoState } = {
    user: {
        userName: "",
        userEmail: "",
        userBio: "",
        userPhoneNumber: "",
        userProfileImage: "",
        userCoverImage: "",
        userToken: ""
    }
};
if (typeof window !== 'undefined') {
    LSData = Object(localStorage.getItem('reduxState'))
}

const initialUserInfoState: UserInfoState = LSData?.user || {
    userName: "",
    userEmail: "",
    userBio: "",
    userPhoneNumber: "",
    userProfileImage: "",
    userCoverImage: "",
    userToken: ""
};


export default initialUserInfoState
export { type UserInfoState }