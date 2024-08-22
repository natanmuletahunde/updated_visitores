
/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Blogs from '../components/Blogs'
import Footer from '../components/Footer'
import Post from '../components/Post'
function Home() {
  return (
    <div>
        {/* Header */}
         <Header/>
        {/* Search */}
        <Search/>
      {/* Intropost */}
      <Blogs/>
      {/* footer */}
      <Footer/>
      {/* Posts */}
      <Post/>
    </div>
  )
}

export default Home
