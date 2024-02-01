import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'

export default function Header(props) {
    const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        <button onClick={()=>navigate(props.login?"/login":"signup")}>{props.login ? "Login in " : "Sign in"}</button>
    </Container>
  )
}

const Container = styled.div`
padding:0 4rem;
.logo {
    img {
        height: 5 rem
    }
}
button {
    padding0.5rem 1rem;
    background:#e50914;
    border:none;
    color:white;
    cursor:pointer;
    border-radius:0.2rem;
    font-weight:bolder;
    font-size:1.05rem;
}`