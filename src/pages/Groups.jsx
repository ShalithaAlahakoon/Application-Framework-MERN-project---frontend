import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import axios from 'axios';


function StudentGroup() {

  const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    await axios.get("http://localhost:5000/api/group")
      .then((res) => {
        console.log(res.data.data);
        setGroups(res.data.data);
      }).catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getGroups();
  }, []);


  const deleteGroup = async (id) => {
    await axios.delete("http://localhost:5000/api/group/delete/" + id)
      .then((res) => {
        alert("Group Deleted Successfully");
        console.log(res.data);
        getGroups();
      }).catch((err) => {
        console.log(err);
        alert("Group Not Deleted");
      });
  }


  return (
    <>
      <Header />
      <SideNav />
      <div className="body pt-4">

        <div className="d-flex justify-content-between m-5">
          <h1>Student Groups Page</h1>
          <a href='/group/register'><button className='btn btn-primary'>Add Student Group</button></a>
        </div>
        <div className="m-5">
          <table className="table table-striped">
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Year</th>
                <th>Semester</th>
                <th>Batch</th>
                <th>Student 1</th>
                <th>Student 2</th>
                <th>Student 3</th>
                <th>Student 4</th>
              </tr>
            </thead>
            <tbody>
              {
                groups.map((group, index) => {
                  return (
                    <tr key={index}>
                      <td>{group.name}</td>
                      <td>{group.year}</td>
                      <td>{group.semester}</td>
                      <td>{group.batch}</td>
                      <td>{group.student1}</td>
                      <td>{group.student2}</td>
                      <td>{group.student3}</td>
                      <td>{group.student4}</td>
                      <td>
                        {/* <a href={`/student/edit/${group._id}`}><button className='btn btn-success mx-3'>Edit</button></a> */}
                        <button className='btn btn-danger' onClick={() => { deleteGroup(group._id) }}>Delete</button>
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

export default StudentGroup
