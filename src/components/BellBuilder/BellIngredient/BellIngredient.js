import React from 'react';
import classes from "./BellIngredient.module.css";

import { ReactComponent as ReactColaSvg } from '../../../images/cola.svg';
import { ReactComponent as ReactFantaSvg } from "../../../images/fanta.svg";
import { ReactComponent as ReactFleshSvg } from "../../../images/flesh.svg";
import { ReactComponent as ReactNitroSvg } from "../../../images/nitro.svg";
import { ReactComponent as ReactPepsiSvg } from "../../../images/pepsi.svg";
import { ReactComponent as ReactSpriteSvg } from "../../../images/sprite.svg";


const BellIngredient = ({ type,fixed  }) => {
  const types = {
    ReactColaSvg: { backgroundImage: `url(${ReactColaSvg})`, width: "70px", height: "70px" },
    ReactFantaSvg: { backgroundImage: `url(${ReactFantaSvg})`, width: "70px", height: "70px" },
    ReactFleshSvg: { backgroundImage: `url(${ReactFleshSvg})`, width: "70px", height: "70px" },
    ReactNitroSvg: { backgroundImage: `url(${ReactNitroSvg})`, width: "70px", height: "70px" },
    ReactPepsiSvg: { backgroundImage: `url(${ReactPepsiSvg})`, width: "70px", height: "70px" },
    ReactSpriteSvg: { backgroundImage: `url(${ReactSpriteSvg})`, width: "70px", height: "70px" },
  };

  return (
      <div className={classes.BellIngredient} style={types[type]}></div>
  );
}
export default BellIngredient;