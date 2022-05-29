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

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/register" exact element={<Register/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/groups" element={<Groups/>} />
                    <Route path="/student/register" element={<StudentRegister/>} />
                    <Route path="/students" element={<Students/>} />
                    <Route path="/topic" element={<EvaluateTopic/>} />
                    <Route path="/presentation" element={<EvaluatePresentation/>} />
                    <Route path="/giveMarks" element={<GiveMarks/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;