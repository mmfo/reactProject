
export function addUser(user){
    console.log("add user")
    return {type:"ADD_USER" ,payload:user}
}
export function deleteUser(name){
    return {type:'DELETE_USER',payload:name}
}
export function updateCurrentUserId(userId){
    return {type:'UPDATE_CURRENT_USER_ID',payload:userId}
}
export function addToBasket(productWithAmount){
    return {type:'ADD_TO_BASKET',payload:productWithAmount}
}
export function updateBasketAmount(productId){
    return {type:'UPDATE_BASKET_AMOUNT',payload:productId}
}
export function removeFromBasket(productId){
    return {type:'REMOVE_FROM_BASKET',payload:productId}
}
