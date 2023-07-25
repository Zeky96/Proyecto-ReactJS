import React from "react";
import { ImCart } from "react-icons/im";
import '../components/CartWidget.css'

export const CartWidget = () => {
    return(
        <div>
           <ImCart color='orange' size={30}  />
           <span className="value">0</span>  
        </div>
    )
}