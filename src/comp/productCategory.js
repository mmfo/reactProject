import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import RecipeReviewCard from './oneProduct'
export default function ProductCategory() {
    const data = useSelector(state => state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { categoryId } = useParams()
    const manager = data?.user?.users?.find(user => user.userId == -8)
    const currentUserId = data?.user?.currentUserId[0]
    return (
        <>
            <h1>product Category</h1>
            <section>
                {data?.product?.products?.map((item, key) => (
                    item.categoryId == categoryId ?
                        <div key={key} className='RecipeReviewCard'>
                            <RecipeReviewCard item={item} ></RecipeReviewCard>
                            {manager.userId == currentUserId &&
                                <Button variant="contained" color="secondary" onClick={() => dispatch({ type: 'DELETE_PRODUCT', payload: key })}>מחק מוצר</Button>
                            }
                        </div> : null

                ))}
            </section>
        </>
    )
}