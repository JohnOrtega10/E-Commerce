export const appActions = {
    setIsLoading: 'SET_IS_LOADING'
}

export const setIsLoading = isLoading =>({
    type: appActions.setIsLoading,
    payload: isLoading
})