import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RecipeReviewCardBasket from './oneProductBasket'
import Button from '@material-ui/core/Button';

export default function Pay() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const data = useSelector(state => state)
    const currentUserId = data?.user?.currentUserId[0]
    let user = data?.user?.users?.find(user => user.userId == currentUserId)
    let [basket, setBasket] = useState(user.basket)
    let basketPoducts = []
    let [booleanForBasket, setBooleanForBasket] = useState(new Array(basket.length).fill(true))
    for (var i = 0; i < basket.length; i++) {
        basketPoducts.push(data?.product?.products?.find(product => product.productId == basket[i].productId))
    }

    let tempTotalPrice = 0
    for (var i = 0; i < basket.length; i++) {
        tempTotalPrice += basket[i].amount * basketPoducts[i].price
    }
    let [totalPrice, setTotalPrice] = useState(tempTotalPrice)
    let order = {}
    function addToRudexOrders() {
        //order.orderId
        let maxOrderId = 0
        data?.order?.orders?.forEach(order => {
            if (order.orderId > maxOrderId)
                maxOrderId = order.orderId
        });
        order.orderId = maxOrderId + 1
        //
        order.userId = currentUserId
        order.products = basket
        dispatch({ type: 'ADD_ORDER', payload: order })
        navigate(`/finish/${order.orderId}`)
    }
    return (
        <>
            <h1>TO PAY : {totalPrice}</h1>
            <Button variant="contained" color="secondary"  onClick={() => addToRudexOrders()}>אישור</Button>
            {basketPoducts.map((item, key) => (
                <div key={key} className='RecipeReviewCard'>
                    {booleanForBasket[key] && <div>
                        <RecipeReviewCardBasket item={item} ></RecipeReviewCardBasket>
                        <p>כמות :{basket[key].amount}</p>
                        <p>price:   {item.price} * {basket[key].amount} = {Math.round(item.price * basket[key].amount* 100) / 100} </p>
                        {'   '}
                    </div>}
                </div>
            ))}
        </>

    )
}