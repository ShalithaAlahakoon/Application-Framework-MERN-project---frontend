import React from "react";
// import Header from "./components/Header";
// import AdminSideNav from "./components/AdminSideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Login from "./pages/Authenticaiton/Login";
import Register from "./pages/Authenticaiton/Register";
import Home from "./pages/Home";
import Groups from "./pages/Groups";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<Login/>} />
                    <Route path="/register" exact element={<Register/>} />
                    <Route path="/home" element={<Home/>} />
                    <Route path="/groups" element={<Groups/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;