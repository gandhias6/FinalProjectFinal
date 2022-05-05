import React from "react";
import Navbar1 from "./Navbar1";
import SideMenu from "./SideMenu";
import Dashboard from "./Dashboard";
import Team from "./Team";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FAQ from "./FAQ";
import AlgoTrading from "./AlgoTrading";
import SignUp from "./SignUp";
import Login from "./Login";
import UpdateProfile from "./UpdateProfile";
// import { AuthProvider } from "../contexts/AuthContext";
import Stocks from "./Stocks";
import StockDetails from "./StockDetails";

function App() {
    return (
        <div className="App">
            <Navbar1></Navbar1>
            <SideMenu></SideMenu>

            <Routes>
                <Route path="/" element={<FAQ />} />
                <Route path="/algoTrading" element={<AlgoTrading />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contactUs" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/updateProfile" element={<UpdateProfile />} />
                <Route path="/stocks" element={<Stocks />} />
                <Route
                    path="/stocks/:company_name"
                    element={<StockDetails />}
                />
            </Routes>
        </div>
    );
}

export default App;
