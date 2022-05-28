import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function Student() {
  return (
    <>
      <Header />
      <SideNav />
      <div className="body pt-4">
        <div className="container d-flex justify-content-around mb-5">
          <h1>Students Page</h1>
          <a href='/student/register'><button className='btn btn-primary'>Add Student</button></a>
        </div>
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IT19960432</td>
                <td>John Doe</td>
                <td>it19960432@my.sliit.lk</td>
                <td>071-1234567</td>
                <td>No.1, Galle Road, Colombo</td>
                <td>
                  <a href='/student/edit'><button className='btn btn-primary'>Edit</button></a>
                  <a href='/student/delete'><button className='btn btn-danger'>Delete</button></a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>




      </div>

    </>
  )
}

export default Student