import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'



function SignUp() {
  return (
    <>
    <ScrollToTop/>

    <NavBar/>
    <h1 className='sign-up'>SIGN UP</h1>
    <Footer />
    </>

  )
}

export default SignUp