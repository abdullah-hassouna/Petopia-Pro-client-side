interface UserInfoState {
    userName: string
    fullName: string
    userEmail: string
    userBio: string
    userPhoneNumber: { phoneNumber: string, countryNumber: string },
    userProfileImage: string
    userCoverImage: string
    followingCount: number
    followerCount: number
}

let LSData: { user: UserInfoState } = {
    user: {
        userName: "",
        fullName: "",
        userEmail: "",
        userBio: "",
        userPhoneNumber: { phoneNumber: "+970", countryNumber: "" },
        userProfileImage: '/defaultAvatar.png',
        userCoverImage: '/defaultAvatar.png',
        followingCount: 0,
        followerCount: 0
    }
};
if (typeof window !== 'undefined') {
    LSData = Object(localStorage.getItem('reduxState'))
}

const initialUserInfoState: UserInfoState = LSData?.user || {
    userName: "",
    fullName: "",
    userEmail: "",
    userBio: "",
    userPhoneNumber: { phoneNumber: "+970", countryNumber: "" },
    userProfileImage: '/defaultAvatar.png',
    userCoverImage: '/defaultAvatar.png',
    followingCount: 0,
    followerCount: 0
};


export default initialUserInfoState
export { type UserInfoState }