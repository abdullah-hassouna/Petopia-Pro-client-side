interface LoadingState {
    isLoading: boolean
}

const LSData = Object(localStorage.getItem('reduxState'));

const initialLoadingState: LoadingState = LSData.loading || {
    isLoading: false
}

export default initialLoadingState
