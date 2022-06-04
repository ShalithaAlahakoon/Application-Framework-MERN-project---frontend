import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import SideNav from '../components/SideNav'
import download from 'downloadjs';
import axios from 'axios';

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/document/getAllFiles');
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get(`http://localhost:5000/api/document/download/${id}`, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  return (
    <>
    <Header/>
    <SideNav/>
    <div className="container">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <h1>Documents of the Students</h1>
      <table class="table">
      <thead>
                    <tr>
                        <th scope="col">Document ID</th>
                        <th scope="col">Document Title</th>
                        <th scope="col">Group ID</th>
                        <th scope="col">Download</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
        <tbody>
        {filesList.length > 0 ? (
            filesList.map((file,index) => (
              file.type == "Document" ?(
                <tr key={index}>
                  <td className="file-id">{file._id}</td>  
                  <td className="file-title">{file.title}</td>
                  <td className="file-description">{file.groupID}</td>


                  <td>
                    <a
                      href="#/"
                      onClick={() =>
                        downloadFile(file._id, file.file_path, file.file_mimetype)
                      }
                    >
                      download
                    </a>
                  </td>
                  <td>
                  <a className="btn btn-warning" href='/evaluate'>
                            <i className="far fa-mark"></i>evaluate
                        </a>
                    </td>
                </tr>
                ):(<tr></tr>)
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default FilesList;