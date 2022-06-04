import React, {useState} from 'react'
import Header from '../components/Header';
import axios from 'axios';
import SideNav from '../components/SideNav';

function GiveFeedback() {
    const [groupId,setDroupId] = useState("");
    const [mark,setMark] = useState("");
    const [comment,setComment] = useState("");
    
  
    function giveFeedback(e){
      e.preventDefault();
  
      const newFeedback = {
        groupId:groupId,
        mark:mark,
        comment:comment
      }
  
      axios.post('http://localhost:5000/api/topicFeedback/add',newFeedback).then(()=>{
        console.log("Feedback Published Successfully")
        alert("Feedback Published Successfully");
        setDroupId("");
        setMark("");
        setComment("");
  
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
            <h1>Evaluate Topic</h1>
        </div>
        <form onSubmit={giveFeedback}>
        <div className="form-outline mb-4">
            <label for='groupId'>Group ID</label><br/>
            <input type="text" className="form-control" id="groupId" 
            onChange={(e)=>{
              setDroupId(e.target.value);
            }}/>
        </div>
        
        <div className="form-outline mb-4">
            <label for='mark'>Mark</label><br/>
            <input type="number" className="form-control" id="mark" placeholder="Out of 20"
            onChange={(e)=>{
              setMark(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='comment'>Comment</label><br/>
            <input type="text" className="form-control" id="comment"  placeholder="Type your comment here..." 
            onChange={(e)=>{
              setComment(e.target.value);
            }} />
            
        </div>
  
       
  
        <div>
        <button type="submit" class="btn btn-primary">Give Feedback</button>
        </div>
  
    
  
        </form>
      </div>
      </>
    )
  }
  
  export default GiveFeedback
  