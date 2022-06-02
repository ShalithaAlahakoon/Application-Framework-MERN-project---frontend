import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Header from '../components/Header'
import SideNav from '../components/SideNav'

function TopicRegister() {

  const [groups, setGroups] = useState([]);

  const [validated, setValidated] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [topic, setTopic] = useState('');
  const [researchGroup, setResearchGroup] = useState('');
  const [researchArea, setResearchArea] = useState('');

  const rGroup = [
    { key: 0, value: "-- Select Group --" },
    { key: 1, value: "Autonomous Intelligent Machines and Systems (AIMS)" },
    { key: 2, value: "Machine Learning and Soft Computing (MLSC)" },
    { key: 3, value: "Knowledge Inspired Computing (KIC)" },
    { key: 4, value: "Computing for Inclusive and Equitable Society (CIEC)" },
    { key: 5, value: "Computing Infrastructure and Security (CIS)" },
    { key: 6, value: "Software Systems & Technologies (SST)" }
  ];

  const rArea = [

    { key: 0, value: "-- Select Reasearch Area --" },
    { key: 1, value: "Artificial Intelligence (AI)" },
    { key: 2, value: "Internet of Things (IoT)" },
    { key: 3, value: "Robotics (R)" },
    { key: 4, value: "Smart Systems (SS)" },
    { key: 5, value: ">Machine Learning (ML)" },
    { key: 6, value: "Soft Computing (SC)" },
    { key: 7, value: "Image Processing (IP)" },
    { key: 8, value: "Natural Language Processing (NLP)" }

  ];

  const handleSubmit = (event) => {

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    console.log("groupName = " + groupName);
    console.log("topic = " + topic);
    console.log('researchGroup = ' + researchGroup);
    console.log('researchArea = ' + researchArea);

    const newTopic = {
      topic: topic,
      researchGroup: researchGroup,
      researchArea: researchArea,
      studentGroup: groupName
    }

    console.log(newTopic);
    axios.post('http://localhost:5000/api/researchTopic/add', newTopic)
      .then(res => {
        alert("Topic Added Successfully");
        window.location.href = '/topics';
      })
      .catch(err => {
        console.log(err);
        alert("Topic Not Added. " + err.response.data.message);
      });

  };

    //get groups from api

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


    return (
      <>
        <Header />
        <SideNav />
        <div className="body pt-4">

          <h1 className='text-center pb-5'>Register a New Topic</h1>
          <div className="container d-flex justify-content-center">
            <div className="card">
              <div className="card-body">
                <Form noValidate validated={validated} className="px-5 form">
                  <Row className="mb-3">
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                      <Form.Label>Student Group Name</Form.Label>

                      <select class="form-control select" id="StudentGroup" onChange={(e) => { setGroupName(e.target.value) }} placeholder="Select Group">

                        {groups.map(group => (
                          <option key={group._id} value={group.name} >{group.name}</option>
                        ))}
                      </select>

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                      <Form.Label>Research Topic</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter you topic"
                        onChange={(e) => setTopic(e.target.value)}
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                      <Form.Label>Research Group</Form.Label>

                      <select class="form-control select" id="rGroup" onChange={(e) => { setResearchGroup(e.target.value) }} placeholder="Select Group">
                        {rGroup.map(o => (
                          <option key={o.key} value={o.value} >{o.value}</option>
                        ))}
                      </select>

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>

                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01" className="m-2">
                      <Form.Label>Reasearch Area</Form.Label>

                      <select class="form-control select" id="rArea" onChange={(e) => { setResearchArea(e.target.value) }}>
                        {rArea.map(o => (
                          <option key={o.key} value={o.value} >{o.value}</option>
                        ))}
                      </select>
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>
                    </Form.Group>




                  </Row>
                  <div className="d-flex justify-content-end">
                    {/* <a href='/topics'><button type='button ' className='btn btn-secondary mx-2'>Cancel</button></a> */}
                    <Button type="button" onClick={handleSubmit}>Submit form</Button>
                  </div>

                </Form>
              </div>
            </div>
          </div>

        </div>

      </>
    )
  }

  export default TopicRegister
