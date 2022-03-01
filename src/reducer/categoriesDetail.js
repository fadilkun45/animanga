
const categoriesDetailReducer = (state = [],action) => {
    switch (action.type) {
        case 'GET CATEGORIES BY DETAIL':
          return  action.payload    
          case 'ADD CATEGORIES BY DETAIL':
            return  [...state, action.payload] 
        case 'DELETE CATEGORIES BY DETAIL':
         return  state = []  
        default:
            return state 
    }
}

export default categoriesDetailReducer