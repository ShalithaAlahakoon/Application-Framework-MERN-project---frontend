import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import axios from 'axios'

function Student() {

  const [students, setStudents] = useState([]);


  const getStudents = async () => {
    await axios.get("http://localhost:5000/api/student/")
      .then((res) => {
        console.log(res.data.data);
        setStudents(res.data.data);
      }).catch((err) => {
        console.log(err);
      });
  }

  const deleteStudent = async (id) => {
    await axios.delete("http://localhost:5000/api/student/delete/" + id)
      .then((res) => {
        alert("Student Deleted Successfully");
        console.log(res.data);
        getStudents();
      }).catch((err) => {
        console.log(err);
        alert("Student Not Deleted");
      });
  }


  useEffect(() => {
    getStudents();
  }, []);


  console.log('students', students);


  return (
    <>
      <Header />
      <SideNav />
      <div className="body pt-4">
        <div className="d-flex justify-content-between m-5">
          <h1>Students Page</h1>
          <a href='/student/register'><button className='btn btn-primary'>Add Student</button></a>
        </div>
        <div className="m-5">
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
              {
                students.map((student, index) => {
                  return (
                    <tr key={index}>
                      <td>{student.itNumber}</td>
                      <td>{student.name}</td>
                      <td>{student.email}</td>
                      <td>{student.phoneNumber}</td>
                      <td>{student.address}</td>
                      <td>
                        {/* <a href={`/student/edit/${student.id}`}><button className='btn btn-success mx-3'>Edit</button></a> */}
                        <button className='btn btn-danger' onClick={() => { deleteStudent(student._id) }}>Delete</button>
                      </td>
                    </tr>
                  )
                })
              }



            </tbody>
          </table>
        </div>




      </div>

    </>
  )
}

export default Student