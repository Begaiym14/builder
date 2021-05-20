
import React from "react";

import classes from "./Drink.module.css";
import cola from "../../../images/cola.svg";
import plumeriaBackground from "../../../images/plumeria.svg";
import lilyBackground from "../../../images/lily.svg";
import gerberaBackground from "../../../images/gerbera.svg";
import chamomileBackground from "../../../images/chamomile.svg";
import orchidsBackground from "../../../images/orchids.svg";

const Drink = ({ type }) => {
  const types = {
    cola: { backgroundImage: `url(${cola})`, width: "50px", height: "50px" },
    plumeria: { backgroundImage: `url(${plumeriaBackground})`, width: "50px", height: "50px" },
    lily: { backgroundImage: `url(${lilyBackground})`, width: "45px", height: "45px" },
    gerbera: { backgroundImage: `url(${gerberaBackground})`, width: "45px", height: "45px" },
    chamomile: { backgroundImage: `url(${chamomileBackground})`, width: "45px", height: "45px" },
    orchids: { backgroundImage: `url(${orchidsBackground})`, width: "45px", height: "45px" },
  };

  return (
    <div className={classes.Drink} style={types[type]}></div>
  );
}

export default Drink;