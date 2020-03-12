// import { FILTER_BY_TEXT } from '../actions'
let initialState = {
    filterText: '',
    filterByPrice: false,
    currentProduct: []
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
        case 'HANDLE_BUY':
            return {
                ...state,
                currentProduct: state.currentProduct.concat(action.product)
            }
        case 'CART_DELETE':
            
            return {
                ...state,
                currentProduct: state.currentProduct.filter(product => product.id !== action.id)
            }
        default: return state;
    }
    
}

export default reducer;