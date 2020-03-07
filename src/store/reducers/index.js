// import { FILTER_BY_TEXT } from '../actions'
let initialState = {
    filterText: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FILTER_BY_TEXT": 
            return {
                ...state,
                filterText: action.text
            }
            
        default: return state;
    }
    
}

export default reducer;