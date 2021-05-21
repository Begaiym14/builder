  
import React from "react";

import classes from "./Drink.module.css";
import colaBackground from "../../../images/cola1.png";
import fantaBackground from "../../../images/fanta1.png";
import fleshBackground from "../../../images/flash1.png";
import nitroBackground from "../../../images/nitro1.png";
import pepsiBackground from "../../../images/pepsi.png";
import spriteBackground from "../../../images/sprite1.png";

const Drink = ({ type }) => {
  const types = {
    cola: { backgroundImage: `url(${colaBackground})`, width: "55px", height: "58px" },
    fanta: { backgroundImage: `url(${fantaBackground})`, width: "55px", height: "55px" },
    flesh: { backgroundImage: `url(${fleshBackground})`, width: "55px", height: "60px" },
    nitro: { backgroundImage: `url(${nitroBackground})`, width: "38px", height: "59px" },
    pepsi: { backgroundImage: `url(${pepsiBackground})`, width: "52px", height: "65px" },
    sprite: { backgroundImage: `url(${spriteBackground})`, width: "50px", height: "58px" },
  };
 
  return ( 
    <div className={classes.Drink} style={types[type]}></div>
 );
}

export default Drink;