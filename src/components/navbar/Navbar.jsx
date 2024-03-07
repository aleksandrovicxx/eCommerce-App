import NavTabs from "./NavTabs";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../photos/logo.svg";
import "./style.css"
import React from "react";
import {ReactComponent as CartIcon} from "../../photos/shopping-cart.svg"
import { useCart } from "../../contexts/CartContext"; 
import CartContext from "../../contexts/CartContext"

const Navbar = () =>{
    const navigate = useNavigate()

    const { purchasedProducts } = useCart();


    return (
        <div className="navbar">
            <div className="LogoAndCartIcon">
                <Logo className="Logo" onClick={() => navigate("/Home")}/>
                <div className="divCartIcon">
                    <CartIcon className="CartIcon" onClick={() => navigate("/CartPage")}/>
                    <p>Number of items in cart: {purchasedProducts.length}</p>
                </div>
            </div>
            <NavTabs/>
        </div>
    )
}

export default Navbar