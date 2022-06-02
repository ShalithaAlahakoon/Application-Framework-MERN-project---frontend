import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import axios from 'axios';

function Document() {
    return (
        <div>
            <Header />
            <SideNav />
            <div className="body pt-4">
                <div className="d-flex justify-content-between m-5">
                    <h1>Documents</h1>
                    <a href='/addDocument'><button className='btn btn-primary'>Add Documents</button></a>
                </div>
            </div>
        </div>
    )
}

export default Document