import React from 'react'
import AdminSideNav from '../../components/AdminSideNav'
import Header from '../../components/Header'


function Home() {
    return (
        <>
        <Header/>
        <AdminSideNav/>
        <div className='home'>
            <h1>Home</h1>
        </div>
        </>
    )
}

export default Home
