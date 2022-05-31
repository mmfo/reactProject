import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Home() {
    const data = useSelector(state => state)
    const navigate = useNavigate()
    return (
        <>
            <h1>Home</h1>
            {/* <nav>
                <Link to='/login'>log in</Link>{'    '}
                <Link to='/signup'>sign up</Link>{'    '}
                <Link to='/all_product'>allproduct</Link>{'    '}
            </nav> */}
            <section >
                {data?.product?.category?.map((category1, key) => (
                    <div className='myclass' key={key}>                      
                        <img  onClick={() => navigate(`/product_category/${category1.id}`)} className="photo" src={data?.product?.products.find(product => category1.id == product.categoryId).img} />
                        <p>{category1.name}</p>                      
                    </div>
                ))}
            </section>
        </>
    )
}

