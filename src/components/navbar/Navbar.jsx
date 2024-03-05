import NavTabs from "./NavTabs";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../photos/logo.svg";
import "./style.css"
import React from "react";

const Navbar = () =>{
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <Logo className="Logo" onClick={() => navigate("/Home")}/>
            <NavTabs/>
        </div>
    )
}

export default Navbar