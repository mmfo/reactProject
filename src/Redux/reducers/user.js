import produce from 'immer'

const initialState = {
    users: [
        {
            userId: -8,
            name: 'm',
            password: '0',
            basket: []
        },
        {
            userId: 101,
            name: 'sara',
            password: '1',
            basket: [{ productId: 2, amount: 3 }, { productId: 3, amount: 3 },{productId: 1, amount: 3 }]
        },
        {
            userId: 102,
            name: 'rivka',
            password: '2',
            basket: []
        },
        {
            userId: 103,
            name: 'eti',
            password: '3',
            basket: [{ productId: 3, amount: 18 }, { productId: 2, amount: 4 }]//productId:_____,amount:____
        }
    ],
    currentUserId: [101]
}

const user = produce((state, action) => {
    let index = state.users.indexOf(state.users.find(user => user.userId == state.currentUserId[0]))
    switch (action.type) {
        case 'ADD_USER':
            state.users.push(action.payload)
            break;
        case 'DELETE_USER':
            state.users.splice(action.payload, 1)
            break;
        case 'UPDATE_CURRENT_USER_ID':
            state.currentUserId[0] = action.payload
            break;
        case 'ADD_TO_BASKET':
            if (index != -1)
                state.users[index].basket.push(action.payload)
            break;
        case 'UPDATE_BASKET_AMOUNT':
            if (index != -1)
                state.users[index].basket.find(productWithAmount => productWithAmount.productId == action.payload).amount = state.users[index].basket.find(productWithAmount => productWithAmount.productId == action.payload).amount - 1
            break;
        case 'REMOVE_FROM_BASKET':
            if (index != -1) {
                let index2 = state.users[index].basket.indexOf(state.users[index].basket.find(productWithAmount => productWithAmount.productId == action.payload))
                if (index2 != -1)
                    state.users[index].basket.splice(index2, 1)
            }
            break;
    }
}
    , initialState)

export default user

