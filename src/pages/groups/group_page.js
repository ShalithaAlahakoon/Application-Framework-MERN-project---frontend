import react from 'react';
import reactDom from 'react-dom';

import Dialog from '../../components/Dialog';

const group_page = () => {

    const [list,setList] = useState([]);
    const [view, setView] = React.useState(false);
    const [editView, setEditView] = React.useState(false);
    const [groupID, setGroupID] = React.useState("");
    const [year, setYear] = React.useState("");
    const [supervisour, setSupervisor] = React.useState("");
    const [cosupervisor, setCoSupervisor] = React.useState("");
    const [member1, setMamber1] = React.useState("");
    const [member2, setMamber2] = React.useState("");
    const [member3, setMamber3] = React.useState("");

    useEffect(()=>{
        getAllGroupInfo();
    },[]);

    function getAllGroupInfo(){
        var url = "http://localhost:3002/groups";

        console.log(url);

        var myHeaders = new Headers();
        myHeaders.append("Cookie", "Phpstorm-19d08dad=a2377f09-9283-4ba2-b790-098e387e293a");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                //  alert(JSON.stringify(data.existingPosts[0]));
                setList(data.existingPosts);
                // renderCartListView(data.data);
            });
    }

    function renderItemListView(list){
        
        list.map((itm)=>{
            return(
                <tr>
                    <td>{itm._id}</td>
                    <td>{itm.year}</td>
                    <td>{itm.supervisour}</td>
                    <td>{itm.cosupervisor}</td>
                    <td><button onClick={() => { setGroupID(itm._id); setYear(itm.year); setEmail(itm.email); setSupervisor(itm.supervisour);  setCoSupervisor(itm.cosupervisor); setMamber1(itm.member1); setMamber2(itm.member2); setMamber3(itm.member3); renderEditViewModel(); }} >Edit</button></td>
                    <td><button onClick={() => { removeGroupInfo(itm._id) }} >Delete</button></td>
                    <td><button onClick={() => { setGroupID(itm._id); setYear(itm.year); setEmail(itm.email); setSupervisor(itm.supervisour);  setCoSupervisor(itm.cosupervisor); setMamber1(itm.member1); setMamber2(itm.member2); setMamber3(itm.member3); renderViewModel(); }}>View</button></td>
                </tr>
            );  
        });
    }

    function removeGroupInfo(staffId) {
        var dt = {
            "id": staffId,

        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dt
        };

        //alert("send data " + JSON.stringify(dt));

        var url = "http://localhost:3002/group/delete/?id=" + staffId;

        console.log(url);

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("response " + JSON.stringify(data));
                getAllGroupInfo();
            });
    }


    function updateGroupInfo() {
        var dt = {
            "id": groupID,
            "Year": year,
            "Supervisor": supervisour,
            "CoSupervisor": cosupervisor,
            "PannelMemeber1" : member1,
            "PannelMemeber2" : member2,
            "PannelMemeber3" : member3


        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dt
        };

        //alert("send data " + JSON.stringify(dt));

        var url = "http://localhost:3002/group/update/?id=" + groupID;

        console.log(url);

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("response " + JSON.stringify(data));
                getAllGroupInfo();
            });
    }


    function renderEditViewModel() {
        return (
            <Dialog isOpen={editView} onClose={(e) => setEditView(!editView)}>
                <div>
                    <div>
                        <label><b>Group ID</b></label>
                        <input type="text" placeholder="Group ID" name="gID" id="gID" required />
                    </div>
                    <div>
                        <label><b>Year</b></label>
                        <input type="text" placeholder="Year" name="gYear" id="gYear" required />
                    </div>
                    <div>
                        <label><b>Supervisour</b></label>
                        <input type="text" placeholder="Supervisor" name="gSupervisor" id="gSupervisor" required />
                    </div>
                    <div>
                        <label><b>Co-Supervisour</b></label>
                        <input type="text" placeholder="Co-Supervisor" name="gCoSupervisor" id="gCoSupervisor" required />
                    </div>
                    <div>
                        <label><b>Member One</b></label>
                        <input type="text" placeholder="Member 1" name="gMember1" id="gMember1" required />
                    </div>
                    <div>
                        <label><b>Memeber Two</b></label>
                        <input type="text" placeholder="Member 2" name="gMember2"gMember1id="gMember2" required />
                    </div>
                    <div>
                        <label><b>Memeber Three</b></label>
                        <input type="text" placeholder="Member 3" name="gMember3" id="gMember3" required />
                    </div>
                    <div class="clearfix">

                        <button type="button" onClick={() => { updateGroupInfo();}} class="savebtn">update Info</button>
                    </div>

                </div>
            </Dialog>
        );
    }

    function renderViewModel() {
        return (
            <Dialog isOpen={view} onClose={(e) => setView(!view)}>
                <div>
                    <div>
                        <label><b>Group ID</b></label>
                        <label ><b>{groupID}</b></label>
                    </div>
                    <div>
                        <label><b>Year</b></label>
                        <label ><b>{year}</b></label>
                    </div>
                    <div>
                        <label><b>Supervisor</b></label>
                        <label ><b>{supervisour}</b></label>
                    </div>
                    <div>
                        <label><b>Co-Supervisor</b></label>
                        <label ><b>{cosupervisor}</b></label>
                    </div>
                    <div>
                        <label><b>Member 1</b></label>
                        <label ><b>{member1}</b></label>
                    </div>
                    <div>
                        <label><b>Member 2</b></label>
                        <label ><b>{member2}</b></label>
                    </div>
                    <div>
                        <label><b>Member 3</b></label>
                        <label ><b>{member3}</b></label>
                    </div>
                </div>
            </Dialog>
        );
    }


    return(
        <div>
            <div>
                <div>
                    <label>Search By Id</label>
                </div>

                <div>
                    <input placeholder='Enter group id' value={"1"} type='text' />
                </div>

                <div>
                    <button onClick={()=>{alert("serch funtion call")}}>
                        <label>Search</label>
                    </button>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                    <th>Group ID</th>
                    <th>Year</th>
                    <th>Supervisour</th>
                    <th>Co - Supervisour </th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                    </thead>
                    <tbody>
                        {renderItemListView(list)}
                    </tbody>

                </table>
            </div>
        </div>
    );

}

export default group_page;