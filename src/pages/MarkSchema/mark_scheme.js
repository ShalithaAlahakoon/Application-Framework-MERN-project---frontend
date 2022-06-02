import react from 'react';
import reactDom from 'react-dom';

import Dialog from '../../components/Dialog';

const marks_page = () => {


    const [list,setList] = useState([]);
    const [view, setView] = React.useState(false);
    const [editView, setEditView] = React.useState(false);
    const [schemaID, setSchemaID] = React.useState("");
    const [topic, setTopic] = React.useState("");
    const [fileLocation, SetFileLocation] = React.useState("");
    const [total, setTotal] = React.useState("");

    useEffect(()=>{
        getAllMarksInfo();
    },[]);

    function getAllMarksInfo(){
        var url = "http://localhost:3002/markschemas";

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
                    <td>{itm.titel}</td>
                    <td>{itm.decription}</td>
                    <td>{itm.total}</td>
                    <td><button onClick={() => { setSchemaID(itm._id); SetFileLocation(itm.decription); setTotal(itm.total); setTopic(itm.decription);   renderEditViewModel(); }} >Edit</button></td>
                    <td><button onClick={() => { removeMarkSchemaInfo(itm._id) }} >Delete</button></td>
                    <td><button onClick={() => { setSchemaID(itm._id); SetFileLocation(itm.decription); setTotal(itm.total); setTopic(itm.decription); renderViewModel(); }}>View</button></td>
                </tr>
            );  
        });
    }

    function removeMarkSchemaInfo(staffId) {
        var dt = {
            "id": staffId,

        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dt
        };

        //alert("send data " + JSON.stringify(dt));

        var url = "http://localhost:3002/markschema/delete/?id=" + staffId;

        console.log(url);

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("response " + JSON.stringify(data));
                getAllMarksInfo();
            });
    }


    function updateMarkSchemaInfo() {
        var dt = {
            "id": schemaID,
            "Titel": staffName,
            "Description": email,
            "Total": contatctNum

        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: dt
        };

        //alert("send data " + JSON.stringify(dt));

        var url = "http://localhost:3002/markschema/update/?id=" + schemaID;

        console.log(url);

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log("response " + JSON.stringify(data));
                getAllMarksInfo();
            });
    }


    function renderEditViewModel() {
        return (
            <Dialog isOpen={editView} onClose={(e) => setEditView(!editView)}>
                <div>
                    <div>
                        <label><b>Marks ID</b></label>
                        <input type="text" placeholder="Marks ID" name="mID" id="mID" required />
                    </div>
                    <div>
                        <label><b>Topic</b></label>
                        <input type="text" placeholder="Topic Name" name="mTopic" id="mTopic" required />
                    </div>
                    <div>
                        <label><b>File </b></label>
                        <input type="file" placeholder="select Mark Schema" name="mFile" id="mFile" required />
                    </div>
                    <div>
                        <label><b>Total</b></label>
                        <input type="text" placeholder="Marks Total" name="mTot" id="mTot" required />
                    </div>
                    <div class="clearfix">

                        <button type="button" onClick={() => { updateMarkSchemaInfo();}} class="savebtn">update Info</button>
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
                        <label><b>Marks ID</b></label>
                        <label ><b>{schemaID}</b></label>
                    </div>
                    <div>
                        <label><b>Titel</b></label>
                        <label ><b>{topic}</b></label>
                    </div>
                    <div>
                        <label><b>File</b></label>
                        <label ><b>{fileLocation}</b></label>
                    </div>
                    <div>
                        <label><b>Total Marks</b></label>
                        <label ><b>{total}</b></label>
                    </div>
                    
                </div>
            </Dialog>
        );
    }


    return (
        <div>
            <div>
                <div>
                    <label>Search By Id</label>
                </div>

                <div>
                    <input placeholder='Enter mark schema id' value={schemaID} type='text' />
                </div>

                <div>
                    <button onClick={() => { alert("serch funtion call") }}>
                        <label>Search</label>
                    </button>
                </div>
            </div>

            <div>
                <table>
                    <thead>
                        <th>Topic</th>
                        <th>Marks Schema File</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>View</th>
                    </thead>
                    <tbody>
                        {
                            renderItemListView(list)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );

}

export default marks_page;