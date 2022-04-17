import React from "react";
import Header from "./components/Header";
import AdminSideNav from "./components/AdminSideNav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/css/App.css";
import Home from "./pages/Home";
import Reports from "./pages/Admin/Report";
import Students from "./pages/Admin/Students";


function App() {
    return (
        <>
            <Router>
                <Header />
                <AdminSideNav />
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/students" element={<Students/>} />
                    <Route path="/reports" element={<Reports/>} />
                </Routes>
            </Router>
        </>
    );
}

export default App;