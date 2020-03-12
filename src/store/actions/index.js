export const filterByText = text => ({
    type: 'FILTER_BY_TEXT',
    text
})

export const filterByPrice = (stat) => ({
    type: 'FILTER_BY_PRICE',
    stat
})

export const handleBuyEvent = (product) => ({
    type: 'HANDLE_BUY',
    product
})

export const handleDeleteCart = id => ({
    type: 'CART_DELETE',
    id
})