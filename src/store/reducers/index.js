// import { FILTER_BY_TEXT } from '../actions'
let initialState = {
    filterText: '',
    filterByPrice: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "FILTER_BY_TEXT": 
            return {
                ...state,
                filterText: action.text
            }
        case 'FILTER_BY_PRICE': 
            return {
                ...state,
                filterByPrice: action.stat
            }
        default: return state;
    }
    
}

export default reducer;