interface UserInfoState {
    fullName: string
    userName: string
    userEmail: string
    userBio: string
    userPhoneNumber: { phoneNumber: string, countryNumber: string },
    userProfileImage: string
    userCoverImage: string
    userToken: string
}

let LSData: { user: UserInfoState } = {
    user: {
        userName: "",
        fullName: "",
        userEmail: "",
        userBio: "",
        userPhoneNumber: { phoneNumber: "", countryNumber: "+970" },
        userProfileImage: "",
        userCoverImage: "",
        userToken: ""
    }
};
if (typeof window !== 'undefined') {
    LSData = Object(localStorage.getItem('reduxState'))
}

const initialUserInfoState: UserInfoState = LSData?.user || {
    fullName: "",
    userName: "",
    userEmail: "",
    userBio: "",
    userPhoneNumber: { phoneNumber: "", countryNumber: "+970" },
    userProfileImage: "",
    userCoverImage: "",
    userToken: ""
};


export default initialUserInfoState
export { type UserInfoState }