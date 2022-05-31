import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addToBasket } from '../Redux/actions'
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router-dom'

export default function ProductDetail() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const data = useSelector(state => state)
    const { productName } = useParams()
    const product = data?.product?.products?.find(product => product.name == productName)
    const manager = data?.user?.users?.find(user => user.userId == -8)
    const currentUserId = data?.user?.currentUserId[0]
    function delProduct() {
        navigate('/')
        dispatch({ type: 'DELETE_PRODUCT', payload: product })
    }
    return (
        <>
            {/* <nav>
                <Link to='/all_product' >all products</Link>{'    '}
                <Link to='/Basket'>basket</Link>
            </nav> */}
            <section>
                <br />
                {manager.userId == currentUserId && <Button variant="contained" color="secondary" onClick={() =>delProduct()}>למנהל מחיקת מוצר</Button>}{'   '}
                <Button variant="contained" color="secondary" onClick={() => dispatch(addToBasket({ productId: product.productId, amount: 1 }))}>הוסף לסל</Button>
                <h1 className='h1'>{productName}</h1>
                <p>color : {product.color}</p>
                <p>price  :{product.price}</p>
                <img className="photo" src={product.img} />
            </section>
        </>
    )
}