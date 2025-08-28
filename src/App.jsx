import React from 'react'
import User from './components/user/User'
import Product from './components/product/Product'
import Post from './components/post/Post'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <User/>
      <Product/>
      <Post/>
      <Footer/>
    </div>
  )
}

export default App