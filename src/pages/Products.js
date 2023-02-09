
import React from 'react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import ScrollToTop from '../components/ScrollToTop'

function Products() {
  return (
     <>
     <ScrollToTop />
     <NavBar/>
     <h1 className='products'>PRODUCTS</h1>
     <Footer/>
     </>
  )
}

export default Products