import React from "react";
// import Header from "./components/Header";
// import AdminSideNav from "./components/AdminSideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Login from "./pages/Authenticaiton/Login";
import Register from "./pages/Authenticaiton/Register";
import Home from "./pages/Home";
import Groups from "./pages/Groups";
import StudentRegister from "./pages/StudentRegister";
import Students from "./pages/Students";

import EvaluateTopic from "./pages/EvaluateTopic";
import EvaluatePresentation from "./pages/EvaluatePresentation";
import GiveMarks from "./pages/MarkingForm";

import GroupRegister from "./pages/GroupRegister";
import Topics from "./pages/Topics";
import TopicRegister from "./pages/TopicRegister";

import Document from "./pages/Document";
import AddDocument from "./pages/AddDocument";

import Supervisors from "./pages/Supervisors";

import DocumnetEvaluation from "./pages/DocumentEvaluation";

import EvaluateDocument from "./pages/EvaluateDocument";

import AcceptTopic from "./pages/AcceptTopic"


function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/register" exact element={<Register/>} />
                    <Route path="/home" element={<Home/>} />

                    <Route path="/student/register" element={<StudentRegister/>} />
                    <Route path="/students" element={<Students/>} />

                    <Route path="/groups" element={<Groups/>} />
                    <Route path="/group/register" element={<GroupRegister/>} />

                    <Route path="/topic" element={<EvaluateTopic/>} />
                    <Route path="/presentation" element={<EvaluatePresentation/>} />
                    <Route path="/giveMarks" element={<GiveMarks/>} />

                    <Route path="/topics" element={<Topics/>} />
                    <Route path="/topic/register" element={<TopicRegister/>} />

                    <Route es path="/document" element={<Document/>} />
                    <Route path="/addDocument" element={<AddDocument/>} />

                    <Route path="/supervisors" element={<Supervisors/>} />
                    <Route path="/documentEvaluation" element={<DocumnetEvaluation/>}/>
                    <Route path="/evaluate" element={<EvaluateDocument/>}/>
                    <Route path="/acceptTopic" element={<AcceptTopic/>}/>

                </Routes>
            </Router>
        </>
    );
}

export default App;