import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
export default function AddProduct() {
    const data = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let product={}
    function addProduct() {
        let maxProductId = 0
        data?.product?.products?.forEach(product => {
            if (product.productId > maxProductId)
            maxProductId = product.productId 
        });
        product.productId = maxProductId + 1
        if (data?.product?.products?.find(product1 => product1.name == product.name)) {
            alert(`the products${product.name} already exist in this name`)
        }
        dispatch({ type: 'ADD_PRODUCT', payload: product })
    }
    return (
        <>
            <h1>Add Product</h1>
            <section>
                <TextField label="categoryId" color="secondary" variant="outlined" type='text' onChange={(e) => { product.categoryId = e.target.value }} />
                <br />
                <br />
                <TextField label="name" color="secondary" variant="outlined" type='text' onChange={(e) => { product.name = e.target.value }} />
                <br />
                <br />
                <TextField label="price"color="secondary" variant="outlined" type='text' onChange={(e) => { product.name = e.target.value }} />
                <br />
                <br />
                <TextField label="color"color="secondary" variant="outlined" type='text'  onChange={(e) => { product.color = e.target.value }} />
                <br />
                <br />
                <TextField label=" img"color="secondary" variant="outlined" type='url' onChange={(e) => { product.img = e.target.value }} />
                <br />
                <br />
                <Button variant="contained" color="secondary" onClick={() => { addProduct() }}>הוספת מוצר</Button>
            </section>
            <h1>AllProduct</h1>
            <section>
                {data?.product?.products?.map((item, key) => (
                    <div key={key}>
                        {item.name}
                        <button onClick={() => navigate(`/product_detail/${item.name}`)}>לפרטים מלאים</button>
                        <button onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: key })}>מחק מוצר</button>
                    </div>
                ))}
            </section>
        </>
    )
}