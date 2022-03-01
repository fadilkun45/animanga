const categoriesReducer = (state = [] ,action) => {
    switch (action.type) {
        case 'FETCH CATEGORIES':
            return action.payload
        case 'FETCH CATEGORIES DETAIL':
            return action.payload
        default:
            return state
    }
}

export default categoriesReducer;