import React from "react";
// import Header from "./components/Header";
// import AdminSideNav from "./components/AdminSideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import AdminHome from "./pages/Admin/AdminHome";
import Reports from "./pages/Admin/Report";
import Students from "./pages/Admin/Students";
import Login from "./pages/Authenticaiton/Login";
import Register from "./pages/Authenticaiton/Register";
import StudentHome from "./pages/Student/StudentHome";  



function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/admin" exact element={<AdminHome/>} />
                    <Route path="/student" exact element={<StudentHome/>} />
                    <Route path="/register" exact element={<Register/>} />
                    <Route path="/students" element={<Students/>} />
                    <Route path="/reports" element={<Reports/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;