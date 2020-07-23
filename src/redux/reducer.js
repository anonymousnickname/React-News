const initialState = {
    isLoggedIn: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {

    case 'LOG':
        return {...state, isLoggedIn: true}

    case 'OUT':
        return {...state, isLoggedIn: false}

        default:
            return state
        }
};

export default reducer