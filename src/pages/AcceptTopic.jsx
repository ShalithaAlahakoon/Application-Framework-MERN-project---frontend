import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import SideNav from '../components/SideNav';
import './css/topics.css';

function Topics() {

    const [topics, setTopics] = useState([]);
 
    //get topics from api
    const getTopics = async () => {
        await axios.get("http://localhost:5000/api/researchTopic/")
            .then((res) => {
                // console.log(res.data.data);
                setTopics(res.data.data);
            }).catch((err) => {
                console.log(err);
            });
    }

    //delete topics
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

    //reserach topic status rejected
    const rejectTopicStatus =  async () => {
        alert("Topic status changed to rejected");
    }

    const acceptTopicStatus =  async () => {
        alert("Topic status changed to accepted");
    }

    useEffect(() => {
        getTopics();
    }, []);

    console.log('topics', topics);
    return (
        <>
            <Header />
            <SideNav />
            <div className="body pt-1">

                <div className="d-flex justify-content-between m-5">
                    <h1>Research Topics Evaluation</h1>
                </div>
                <div className="m-5">
                    {
                        topics.map((topic) => {
                            return <div className='form-outline mb-4'>
                                <div className='form-control'>
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
                                            <p className="card-text">{topic.studentGroup}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-end"> 
                                        <button className='btn btn-primary mx-2'  onClick={() => { acceptTopicStatus() }}>Accept</button>
                                        <button className='btn btn-danger' onClick={() => { rejectTopicStatus() }}>Reject</button>
                                    </div>


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