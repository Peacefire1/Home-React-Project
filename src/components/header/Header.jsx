import React from 'react'
import "./header.css"
import Head from './Head'
import Navbar from './Navbar'
import Search from './Search'

const Header = () => {
  return (
    <div>
      <Head/>
      <Search/>
      <Navbar/>
    </div>
  )
}

export default Header
