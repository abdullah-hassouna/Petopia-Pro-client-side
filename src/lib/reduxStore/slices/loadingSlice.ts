interface LoadingState {
    isLoading: boolean
}

let LSData;
if (typeof window!.localStorage !== 'undefined') {
    LSData = Object(localStorage.getItem('reduxState'));
}

const initialLoadingState: LoadingState = LSData.loading || {
    isLoading: false
}

export default initialLoadingState
