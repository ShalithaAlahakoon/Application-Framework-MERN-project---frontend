import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function Home() {
  return (
    <div>
      <Header />
      <SideNav />
      <div className="body">
        <h1>Home</h1>
      </div>

    </div>
  )
}

export default Home
