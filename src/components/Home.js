import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    background-color: red;
    border: 1px solid black;
    padding: 1rem 1rem;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 700;

    &:hover{
        background-color: #ff000097;
    }
`

export default function Home({setShowLogin ,setShowHome}) {
    

    const btnHandler =()=>{
        setShowLogin(true)
        setShowHome(false)

        localStorage.removeItem('auth')
    }
    return (
        <div>
            <h1>Hello, User</h1>
            <Button onClick={btnHandler}>Logout</Button>
        </div>
    )
}
