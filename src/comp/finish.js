import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect, useRef } from "react";
export default function Finish() {
    const { orderId } = useParams()
    useEffect(() => {
        alert('הנך מועבר לדף התשלום')
      }, []);
    return (
        <>
            <section>
                <h1>הזמנה מס : {orderId} בוצעה בהצלחה</h1>
                <h2>תודה</h2>
            </section>
            <nav>
                <Link to='/'>חזרה לדף הבית</Link>{'   '}
            </nav>
        </>
    )
}