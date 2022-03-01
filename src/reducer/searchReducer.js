const searchReducer = (state = [],action) => {
    switch (action.type) {
        case 'GET SEARCH':
            return action.payload    
        case 'DELETE SEARCH':
            return state = []    
        default:
            return state    
    }
}

export default searchReducer;