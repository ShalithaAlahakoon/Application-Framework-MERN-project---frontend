import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function Student() {
  return (
    <>
    <Header />
      <SideNav />
    <div className="body pt-4">
       
            <h1>Students Page</h1>

            <a href='/student/register'><button className='btn btn-primary'>Add Student</button></a>
       
    </div>
      
    </>
  )
}

export default Student