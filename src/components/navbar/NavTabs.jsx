import NavTabsItem from "./NavTabsItem";
import "./style.css"
import React from "react";

const NavTabs = () => {
    return (
        <div className="navTabs">
            <NavTabsItem value='Home'/>
            <NavTabsItem value='Products'/>
            <NavTabsItem value='ContactUs'/>
        </div>
    )
}

export default NavTabs;