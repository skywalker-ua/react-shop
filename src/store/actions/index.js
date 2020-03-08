export const filterByText = text => ({
    type: 'FILTER_BY_TEXT',
    text
})

export const filterByPrice = (stat) => ({
    type: 'FILTER_BY_PRICE',
    stat
})