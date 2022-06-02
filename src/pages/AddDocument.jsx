import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios';
import './js/fileUpload.js'


function AddDocument() {
  const [validated, setValidated] = useState(false);
  const [groupName, setGroupName] = useState('');
  const [groups, setGroups] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [description, setDescription] = useState('');

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


  const handleSubmit = (event) => {

    console.log("groupName = " + groupName);
    console.log("desc = " + description);
    console.log('selected file = ' + selectedFile);
    console.log('selected file name= ' + selectedFile.name);
    console.log('selected file type= ' + selectedFile.type);
    console.log('selected file size= ' + selectedFile.size);
    console.log('selected file path= ' + selectedFile.path);



    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

  };

  const handleFileSelect = async (selectedFile) => {
    setSelectedFile(selectedFile);

    
    console.log('selected file = ' + selectedFile);
    console.log('selected file name= ' + selectedFile.name);
    console.log('selected file type= ' + selectedFile.type);
    console.log('selected file size= ' + selectedFile.size);
    console.log('selected file path= ' + selectedFile.path);

    if(selectedFile.type !== "application/pdf" && selectedFile.type !== "application/msword" && selectedFile.type !== "application/vnd.openxmlformats-officedocument.wordprocessingml.document"){
      alert("File Type not valid !!");
   
    }else if (selectedFile.size >  5242880) {
      alert("File Size is lager than 5MB!!");
    }
    else{
            //print file details
            var txt = "";
            txt += " <div class=row>  ";
            txt += "<div class='d-flex col-lg-1 col-2 text-center close-btn-wrapper'>";
            txt += "<button class='btn'><i class='fa fa-trash' aria-hidden='true'></i> </button> <br>";
            txt += "</div>";
            txt += "<div class='col-lg-11 col-10 my-3 flie-details-wrapper' >";
            txt += "File Name: " + selectedFile.name + "<br>";
            txt += "File Size: " + ((selectedFile.size) / (1024 * 1204)).toFixed(2) + " MB <br>";
            txt += "</div>";
            txt += " </div>";
            document.getElementById("fileMessage").innerHTML = txt;

            const newDocument = {
              file : selectedFile,
              groupName: groupName,
              description: description
            }

            console.log(newDocument);

           
            // await axios.post(`http://localhost:5000/api//upload`, newDocument, {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   }
            // }).then((res) => {
            //   console.log(res.data);
            //   alert("File Uploaded Successfully");
            // }
            // ).catch((err) => {
            //   console.log(err);
            //   alert("File Upload Failed");
            // } 
            // );
    }
  }

  return (
    <div>
      <Header />
      <SideNav />
      <div className="body pt-4">

        <h1>Add new Document</h1>
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
                  <Form.Group as={Col} md="12" controlId="validationCustom02" className="m-2">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Enter you document name"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      This field is required!
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="12" controlId="validationCustom03" className="m-2">
                    <div class="file-upload-wrapper mt-3">
                      <label for="label">Add Document</label>
                      <div class="d-flex justify-content-center">
                        <label id="label" class="file-upload btn btn-warning " for="file">Select Files</label>
                      </div>
                      <input type="file" name="upload[]" id="file" class="file-upload" style={{ visibility: "hidden" }}  onChange={(e) => { handleFileSelect(e.target.files[0]); }} required />
                      <div id="fileMessage"></div>
                    </div>
                    <br />
                    <p className="text-muted"><strong>Note:</strong>Only .PDF, .doc, .docx formats allowed. Maximum File size per file is only 5MB</p>

                  </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                  <Button type="button" onClick={handleSubmit}>Submit form</Button>
                </div>

              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddDocument