import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { updateBasketAmount, removeFromBasket } from '../Redux/actions'
import Button from '@material-ui/core/Button';
import RecipeReviewCardBasket from './oneProductBasket'

export default function Basket() {

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
    function changeAmount(i) {
        //update visual
        let tempArr = JSON.parse(JSON.stringify(basket))//העתקה עמוקה
        tempArr[i].amount = tempArr[i].amount - 1
        setBasket(tempArr)
        //update in the state
        dispatch(updateBasketAmount(basket[i].productId))
        //update the total price
        let tempTotalPrice1 = 0
        for (var i = 0; i < basket.length; i++) {
            tempTotalPrice1 += tempArr[i].amount * basketPoducts[i].price * booleanForBasket[i]
        }
        setTotalPrice(tempTotalPrice1)
        navigate('/basket')
    }
    function removeFromBasket1(key, productId) {
        //update visual
        let tempBooleanForBasket = JSON.parse(JSON.stringify(booleanForBasket))//העתקה עמוקה
        tempBooleanForBasket[key] = false
        setBooleanForBasket(tempBooleanForBasket)
        //update in the state
        dispatch(removeFromBasket(productId))
        //
        let tempBasket = JSON.parse(JSON.stringify(basket))//העתקה עמוקה
        tempBasket[key].amount = 0
        setBasket([...tempBasket])
        //update total price
        let tempTotalPrice1 = 0
        for (var i = 0; i < basket.length; i++) {
            if (tempBooleanForBasket[i] == true)
                tempTotalPrice1 += basket[i].amount * basketPoducts[i].price
        }
        setTotalPrice(tempTotalPrice1)
    }
    return (
        <>
            <h1>סל קניות</h1>
            {booleanForBasket.find(item => item == true) && <Button variant="contained" color="secondary" onClick={() => navigate('/pay')}>{totalPrice}לתשלום</Button>}
            {basketPoducts.map((item, key) => (
                <div key={key} className='RecipeReviewCard'>
                    {booleanForBasket[key] && <div>
                    <RecipeReviewCardBasket item={item} ></RecipeReviewCardBasket>

                        <p>כמות :{basket[key].amount}</p>
                        <p>price:   {item.price} * {basket[key].amount} = {Math.round(item.price * basket[key].amount* 100) / 100} </p>
                        {basket[key].amount > 1 && <Button variant="contained" color="secondary" onClick={() => changeAmount(key)}>שינוי כמות</Button>}
                        {'   '}
                        <Button variant="contained" color="secondary" onClick={() => removeFromBasket1(key, item.productId)}>הסרה מהסל</Button>
                        
                    </div>}
                </div>
            ))}
        </>
    )
}