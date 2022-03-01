const mangaReducer = (state= [], action ) => {
   
    switch (action.type) {
        case 'FETCH ALL':
            return action.payload;
        case 'FETCH NEXT PAGE':
            return [...state,action.payload]
        default:
            return state ;
    }
}

export default mangaReducer;