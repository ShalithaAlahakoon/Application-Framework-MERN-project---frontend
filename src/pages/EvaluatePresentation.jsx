import React from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function EvaluatePresentation(){
    return(
        <>
        <Header/>
        <SideNav/>
        <div className='container'>
            <h1>Presentations of the Students</h1>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Group ID</th>
                        <th scope="col">Presentation ID</th>
                        <th scope="col">Document Path</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                {/* <tbody>
                    <th scope="row">{index+1}</th>
                    <td>{presentation.groupId}</td>
                    <td>{presentation.id}</td>
                    <td>{presentation.path}</td>
                    <td>
                        <a className="btn btn-warning" href="#">
                            <i className="far fa-mark"></i>Submit
                        </a>
                    </td>
                </tbody> */}
            </table>
        </div>
        </>
    )
}

export default EvaluatePresentation;