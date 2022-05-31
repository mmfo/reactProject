import React from 'react'
import { useSelector } from 'react-redux'
import RecipeReviewCardOrder from './oneOrder'
export default function PrivateArea() {
    const data = useSelector(state => state)
    let user = data?.user?.users?.find(user => user.userId == data?.user?.currentUserId[0])
    const currentUserId = data?.user?.currentUserId[0]

    return (
        <>
            <h1>אזור אישי</h1>
            <h1>{user.name}</h1>
            <section>
                {data?.order?.orders?.map((item, key) => (
                    currentUserId == item.userId ?
                        <div key={key} className='RecipeReviewCardOrder' >
                            <RecipeReviewCardOrder item={item}></RecipeReviewCardOrder>                       
                        </div>
                        : null
                ))}
            </section>
        </>
    )
}