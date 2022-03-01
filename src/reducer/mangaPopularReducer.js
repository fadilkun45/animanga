const mangaPopularReducer = (state= [], action ) => {
    switch (action.type) {
        case 'FETCH POPULAR':
            return action.payload;
        default:
            return state ;
    }
}

export default mangaPopularReducer;