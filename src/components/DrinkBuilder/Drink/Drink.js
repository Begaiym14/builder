  
import React from "react";

import classes from "./Drink.module.css";
import colaBackground from "../../../images/cola.svg";
import fantaBackground from "../../../images/fanta.svg";
import fleshBackground from "../../../images/flesh.svg";
import nitroBackground from "../../../images/nitro.svg";
import pepsiBackground from "../../../images/pepsi.svg";
import spriteBackground from "../../../images/sprite.svg";

const Drink = ({ type }) => {
  const types = {
    cola: { backgroundImage: `url(${colaBackground})`, width: "50px", height: "50px" },
    fanta: { backgroundImage: `url(${fantaBackground})`, width: "50px", height: "50px" },
    flesh: { backgroundImage: `url(${fleshBackground})`, width: "45px", height: "45px" },
    nitro: { backgroundImage: `url(${nitroBackground})`, width: "45px", height: "45px" },
    pepsi: { backgroundImage: `url(${pepsiBackground})`, width: "45px", height: "45px" },
    sprite: { backgroundImage: `url(${spriteBackground})`, width: "45px", height: "45px" },
  };
 
  return ( 
    <div className={classes.Drink} style={types[type]}></div>
 );
}

export default Drink;