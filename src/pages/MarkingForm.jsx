import React, {useState} from 'react'
import Header from '../components/Header';
import axios from 'axios';
import SideNav from '../components/SideNav';

function GiveMarks() {
    const [groupId,setDroupId] = useState("");
    const [mark1,setMark1] = useState("");
    const [mark2,setMark2] = useState("");
    const [mark3,setMark3] = useState("");
  
    function sendMarks(e){
      e.preventDefault();
  
      const newMark = {
        groupId:groupId,
        mark1:mark1,
        mark2:mark2,
        mark3:mark3
      }
  
      axios.post('#',newMark).then(()=>{
        console.log("Marks Published Successfully")
        setDroupId("");
        setMark1("");
        setMark3("");
        
  
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
            <h1>Marking Form</h1>
        </div>
        <form onSubmit={sendMarks}>
        <div className="form-outline mb-4">
            <label for='groupId'>Group ID</label><br/>
            <input type="text" className="form-control" id="groupId" readOnly />
            
        </div>
        
        <h5>Marks</h5><br/>
        <div className="form-outline mb-4">
            <label for='mark1'>Slides</label><br/>
            <input type="number" className="form-control" id="mark1"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMark1(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='mark2'>Demo</label><br/>
            <input type="number" className="form-control" id="mark2"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMark2(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='mark3'>Total Mark</label><br/>
            <input type="number" className="form-control" id="mark3" readOnly 
            onChange={(e)=>{
              setMark3(e.target.value);
            }} />
            
        </div>
  
        <div>
        <button type="submit" class="btn btn-primary">Publish Marks</button>
        </div>
  
    
  
        </form>
      </div>
      </>
    )
  }
  
  export default GiveMarks
  