const mangaChapterReducer = (state = [],action) => {
    switch (action.type) {
        case 'FETCH BY CHAPTER':
        return action.payload
        case 'DELETE CHAPTER':
            return state = []
        default:
        return state
    }
}

export default mangaChapterReducer 