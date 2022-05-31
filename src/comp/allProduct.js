import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import RecipeReviewCard from './oneProduct'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default function AllProduct() {
    const data = useSelector(state => state)
    const navigate = useNavigate()
    function searchProductByName() {
        let searchProduct = data?.product?.products?.find(product => product.name == productName)
        if (searchProduct)
            navigate(`/product_detail/${searchProduct.name}`)
    }
    let productName
    return (
        <>
            <h1>Product</h1>
            <aside>
                <label>
                <TextField label="productName" variant="outlined" type='text' size='small' color="secondary" onChange={(e) => productName = e.target.value} />
                </label>
                <Button variant="contained" color="secondary" onClick={() => searchProductByName()}>search</Button>

            </aside>

            <section>
                {data?.product?.products?.map((item, key) => (
                    <div key={key} className='RecipeReviewCard'>
                        <RecipeReviewCard item={item} ></RecipeReviewCard>
                    </div>
                ))}
            </section>
        </>
    )
}