import React from 'react'
import BackgroundImage from '../components/BackgroundImage'
import Header from '../components/Header'
import styled from "styled-components"
export default function Signup() {
  return (
    <Container>
        <BackgroundImage />
        <div className="content">
    
        <Header />
        <div className="flex coloumn a-center j-center body">
        <div className="text flex coloumn">
            <h1>Watch unlimited Movies and TV shows</h1>
            <h4>Watch anywhere, Cancel anytime</h4>
            <h6>Ready to watch, Enter your Email to create or start membership</h6>
        </div>
        <div className='form'>
            <input type='email' placeholder='Enter your Email' name='email' />
            <input type='password' placeholder='Enter your password' name='password' />
            <button type='submit'>Get Started</button>
        </div>           
        </div>
        </div> 
    </Container>
  )
}

const Container = styled.div`
position:relative;
.content {
    position:absolute;
    top:0;
    left:0;
    background-color:rgb(0,0,0,0.5);
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows: 15vh 85vh;
}`;