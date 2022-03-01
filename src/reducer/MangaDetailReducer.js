const mangaDetailReducer = (state= [],action) => {
    switch (action.type) {
        case 'FETCH BY ID' :
            return action.payload;
        case 'DELETE OLD DATA' :
            return state = [];
        default:
            return state ;
    }
}

export default mangaDetailReducer