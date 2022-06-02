import React, { useEffect, useState, useRef } from 'react'
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import { Button, Col, Form, Row } from 'react-bootstrap'
import axios from 'axios';
import Dropzone from 'react-dropzone';
import './css/addDocument.css';




function AddDocument() {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(''); // state for storing previewImage
  const [state, setState] = useState({
    title: '',
    description: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
 
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const { title, description } = state;
      if (title.trim() !== '' && description.trim() !== '') {
        if (file) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('title', title);
          formData.append('description', description);
  
          setErrorMsg('');
          await axios.post(`http://localhost:5000/api/document/upload`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(res => {
            if (res.data.success === true) {
              alert('Document Uploaded Successfully');
              window.location.href = '/document';
            } else {
              alert('Document Not Uploaded. ' + res.data.message);
            }
          });

        } else {
          setErrorMsg('Please select a file to add.');
        }
      } else {
        setErrorMsg('Please enter all the field values.');
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <SideNav />
      <div className="body pt-4">
        <h1 className='text-center pb-5'>Submit new document</h1>
        <div className="container d-flex  justify-content-center ">
          <div className="card">
            <div className="card-body">
              <Form className="search-form d-flex flex-column" onSubmit={handleOnSubmit}>
                {errorMsg && <p className="errorMsg">{errorMsg}</p>}
                <Row>
                  <Col>
                    <Form.Group controlId="title" className="m-1">
                      <Form.Control
                        type="text"
                        name="title"
                        value={state.title || ''}
                        placeholder="Enter title"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="description" className="m-1">
                      <Form.Control
                        type="text"
                        name="description"
                        value={state.description || ''}
                        placeholder="Enter description"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="upload-section my-2">
                  <Dropzone onDrop={onDrop}>
                    {({ getRootProps, getInputProps }) => (
                      <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                        <input {...getInputProps()} />
                        <p>Drag and drop a file OR click here to select a file</p>
                        {file && (
                          <div>
                            <strong>Selected file:</strong> {file.name}
                          </div>
                        )}
                      </div>
                    )}
                  </Dropzone>
                
                </div>
                <Button variant="primary" type="submit" className="m-1">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddDocument