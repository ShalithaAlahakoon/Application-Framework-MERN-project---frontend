import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import axios from 'axios';
import './css/topics.css'

function Topics() {

    const [topics, setTopics] = useState([]);

    const getTopics = async () => {
        await axios.get("http://localhost:5000/api/researchTopic/")
            .then((res) => {
                console.log(res.data.data);
                setTopics(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    const deleteTopic = async (id) => {
        await axios.delete("http://localhost:5000/api/researchTopic/delete/" + id)
            .then((res) => {
                alert("Topic Deleted Successfully");
                console.log(res.data);
                getTopics();
            }).catch((err) => {
                console.log(err);
                alert("Topic Not Deleted");
            });
    }

    useEffect(() => {
        getTopics();
    }, []);

    console.log('topics', topics);
    return (
        <>
            <Header />
            <SideNav />
            <div className="body pt-4">

                <div className="d-flex justify-content-between m-5">
                    <h1>Reaserch Topics Page</h1>
                    <a href='/topic/register'><button className='btn btn-primary'>Add Reaserch Topic</button></a>
                </div>
                <div className="m-5 d-flex">
                    {
                        topics.map((topic, index) => {
                            return <div className="card m-3" >
                                <div className="card-header">
                                    <h5 className="card-title">{topic.topic}</h5>
                                </div>
                                <div className="card-body">

                                    <div className="row">
                                        <div className="col-3">
                                            <p className="card-text">Reaserch Group</p>
                                        </div>
                                        <div className="col-9">
                                            <p className="card-text">{topic.reaserchGroup}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="card-text">Reaserch Area</p>
                                        </div>
                                        <div className="col-9">
                                            <p className="card-text">{topic.researchArea}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-3">
                                            <p className="card-text">Student Group</p>
                                        </div>
                                        <div className="col-9">
                                            <p className="card-text">Group 1</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-end">
                                        <button className='btn btn-primary mx-2'>Edit</button>
                                        <button className='btn btn-danger' onClick={() =>{deleteTopic(topic._id)}}>Delete</button>
                                    </div>


                                </div>
                            </div>
                        }
                        )
                    }


                </div>
            </div>

        </>
    )
}

export default Topics