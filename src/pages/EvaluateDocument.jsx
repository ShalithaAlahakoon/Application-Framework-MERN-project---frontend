import React, {useState} from 'react'
import Header from '../components/Header';
import axios from 'axios';
import SideNav from '../components/SideNav';

function EvaluateDocument() {
    const [groupId,setDroupId] = useState("");
    const [mark,setMark] = useState("");
    const [markA,setMarkA] = useState("");
    const [markB,setMarkB] = useState("");
    
  
    function evaluateDocument(e){
      e.preventDefault();
  
      const newDocumentMark = {
        groupId:groupId,
        mark:mark,
        markA:markA,
        markB:markB,

      }
  
      axios.post('http://localhost:5000/api/documentMark/add',newDocumentMark).then(()=>{
        console.log("Feedback Published Successfully")
        alert("Evaluate Document Successfully");
        setDroupId("");
        setMark("");
        setMarkA("");
        setMarkB("");

  
      }).catch((err)=>{
        alert(err)
      })
    }
  
    return (
      <>
      <Header />
      <SideNav/>
      <div className='container'>
          <div>
            <h1>Evaluate Document</h1>
        </div>
        <form onSubmit={evaluateDocument}>
        <div className="form-outline mb-4">
            <label for='groupId'>Group ID</label><br/>
            <input type="text" className="form-control" id="groupId" 
            onChange={(e)=>{
              setDroupId(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='groupId'>Part A - marks</label><br/>
            <input type="number" className="form-control" id="markA" placeholder="Out of 10"
            onChange={(e)=>{
              setMark(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='groupId'>Part B - marks</label><br/>
            <input type="number" className="form-control" id="markB" placeholder="Out of 10"
            onChange={(e)=>{
              setMark(e.target.value);
            }}/>
        </div>
        
        <div className="form-outline mb-4">
            <label for='mark'>Total Mark</label><br/>
            <input type="number" className="form-control" id="mark" placeholder="Out of 20"
            onChange={(e)=>{
              setMark(e.target.value);
            }}/>
        </div>

        <div>
        <button type="submit" class="btn btn-primary" value="submit" >Save</button>
        </div>
  
        </form>
      </div>
      </>
    );
  
  }
  
  export default EvaluateDocument
  