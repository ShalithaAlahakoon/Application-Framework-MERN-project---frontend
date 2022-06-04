import React, {useState} from 'react'
import Header from '../components/Header';
import axios from 'axios';
import SideNav from '../components/SideNav';

function GiveMarks() {
    const [groupId,setDroupId] = useState("");
    const [member1Id,setMember1Id] = useState("");
    const [member1Slide,setMember1Slide] = useState("");
    const [member1Demo,setMember1Demo] = useState("");
    const [member1Total,setMember1Total] = useState("");
    const [member2Id,setMember2Id] = useState("");
    const [member2Slide,setMember2Slide] = useState("");
    const [member2Demo,setMember2Demo] = useState("");
    const [member2Total,setMember2Total] = useState("");
    const [member3Id,setMember3Id] = useState("");
    const [member3Slide,setMember3Slide] = useState("");
    const [member3Demo,setMember3Demo] = useState("");
    const [member3Total,setMember3Total] = useState("");
    const [member4Id,setMember4Id] = useState("");
    const [member4Slide,setMember4Slide] = useState("");
    const [member4Demo,setMember4Demo] = useState("");
    const [member4Total,setMember4Total] = useState("");
  
    function giveMarks(e){
      e.preventDefault();
  
      const newMark = {
        groupId:groupId,
        member1Id:member1Id,
        member1Slide:member1Slide,
        member1Demo:member1Demo,
        member1Total:member1Total,
        member2Id:member2Id,
        member2Slide:member2Slide,
        member2Demo:member2Demo,
        member2Total:member2Total,
        member3Id:member3Id,
        member3Slide:member3Slide,
        member3Demo:member3Demo,
        member3Total:member3Total,
        member4Id:member4Id,
        member4Slide:member4Slide,
        member4Demo:member4Demo,
        member4Total:member4Total,
      }
  
      axios.post('http://localhost:5000/api/presentationMarks/add',newMark).then(()=>{
        console.log("Marks Published Successfully")
        alert("Marks Published Successfully");
        setDroupId("");
        setMember1Id("");
        setMember1Slide("");
        setMember1Demo("");
        setMember1Total("");
        setMember2Id("");
        setMember2Slide("");
        setMember2Demo("");
        setMember2Total("");
        setMember3Id("");
        setMember3Slide("");
        setMember3Demo("");
        setMember3Total("");
        setMember4Id("");
        setMember4Slide("");
        setMember4Demo("");
        setMember4Total("");
  
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
        <form onSubmit={giveMarks}>
        <div className="form-outline mb-4">
            <label for='groupId'>Group ID</label><br/>
            <input type="text" className="form-control" id="groupId" 
            onChange={(e)=>{
              setDroupId(e.target.value);
            }}/>
        </div>
        
        <h4>Marks</h4>
        <h5>Member 1</h5>
        <div className="form-outline mb-4">
            <label for='member1Id'>Student ID</label><br/>
            <input type="text" className="form-control" id="member1Id" 
            onChange={(e)=>{
              setMember1Id(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='member1Slide'>Slides</label><br/>
            <input type="number" className="form-control" id="member1Slide"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember1Slide(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member1Demo'>Demo</label><br/>
            <input type="number" className="form-control" id="member1Demo"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember1Demo(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member1Total'>Total Mark</label><br/>
            <input type="number" className="form-control" id="member1Total" 
            onChange={(e)=>{
              setMember1Total(e.target.value);
            }} />
            
        </div>
        
        <h5>Member 2</h5>
        <div className="form-outline mb-4">
            <label for='member2Id'>Student ID</label><br/>
            <input type="text" className="form-control" id="member2Id"
            onChange={(e)=>{
              setMember2Id(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='member2Slide'>Slides</label><br/>
            <input type="number" className="form-control" id="member2Slide"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember2Slide(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member2Demo'>Demo</label><br/>
            <input type="number" className="form-control" id="member2Demo"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember2Demo(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member2Total'>Total Mark</label><br/>
            <input type="number" className="form-control" id="member2Total" 
            onChange={(e)=>{
              setMember2Total(e.target.value);
            }} />
            
        </div>
        
        <h5>Member 3</h5>
        <div className="form-outline mb-4">
            <label for='member3Id'>Student ID</label><br/>
            <input type="text" className="form-control" id="member3Id"
            onChange={(e)=>{
              setMember3Id(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='member3Slide'>Slides</label><br/>
            <input type="number" className="form-control" id="member3Slide"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember3Slide(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member3Demo'>Demo</label><br/>
            <input type="number" className="form-control" id="member3Demo"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember3Demo(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member3Total'>Total Mark</label><br/>
            <input type="number" className="form-control" id="member3Total" 
            onChange={(e)=>{
              setMember3Total(e.target.value);
            }} />
            
        </div>
        
        <h5>Member 4</h5>
        <div className="form-outline mb-4">
            <label for='member4Id'>Student ID</label><br/>
            <input type="text" className="form-control" id="member4Id"
            onChange={(e)=>{
              setMember4Id(e.target.value);
            }}/>
        </div>

        <div className="form-outline mb-4">
            <label for='member4Slide'>Slides</label><br/>
            <input type="number" className="form-control" id="member4Slide"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember4Slide(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member4Demo'>Demo</label><br/>
            <input type="number" className="form-control" id="member4Demo"  placeholder="Out of 10" 
            onChange={(e)=>{
              setMember4Demo(e.target.value);
            }} />
            
        </div>
  
        <div className="form-outline mb-4">
            <label for='member4Total'>Total Mark</label><br/>
            <input type="number" className="form-control" id="member4Total" 
            onChange={(e)=>{
              setMember4Total(e.target.value);
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
  