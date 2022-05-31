import produce from 'immer'

const initialState = {
    orders: [
        {
            orderId: 11,
            userId: 101,
            products: [
                { productId: 1, amount: 5 },
                { productId: 2, amount: 10 }
            ]
        },
        {
            orderId: 12,
            userId: 102,
            products: [
                { productId: 1, amount: 5 },
                { productId: 2, amount: 10 }
            ]
        },
        {
            orderId: 13,
            userId: 101,
            products: [
                { productId: 3, amount: 1 },
                { productId: 2, amount: 1 }
            ]
        },
    ],
    
    currentOrderId:[12]
}

const reducer = {

    ADD_ORDER(state, action) {
        state.orders.push(action.payload)
    },
    DELETE_ORDER(state, action) {
        state.orders.splice(action.payload, 1)
    }
}

export default produce((state, action) => {
    if (reducer[action.type])
        reducer[action.type](state, action)
}
    , initialState)
