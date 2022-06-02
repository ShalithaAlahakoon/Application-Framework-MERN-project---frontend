import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function EvaluateTopic(){
    return(
        <>
        <Header/>
        <SideNav/>
        <div className='container'>
            <h1>Documents of the Students</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Group ID</th>
                        <th scope="col">Document ID</th>
                        <th scope="col">Document Path</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <th scope="row">{index+1}</th>
                    <td>{document.groupId}</td>
                    <td>{document.id}</td>
                    <td>{document.path}</td>
                    <td>
                        <a className="btn npm i axios" href="#">
                            <i className="fas fa-accept"></i>Accept
                        </a>
                        <a className="btn btn-danger" href="#">
                            <i className="far fa-reject"></i>Reject
                        </a>
                    </td>
                </tbody> */}
            </table>
        </div>
        </>
    )
}

export default EvaluateTopic;