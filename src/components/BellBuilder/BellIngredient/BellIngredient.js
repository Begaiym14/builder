import classes from "./BellIngredient.module.css";

import cola from "../../../images/cola.png";
import fanta from "../../../images/fanta.png";
import flesh from "../../../images/flesh.png";
import nitro from "../../../images/nitro.png";
import pepsi from "../../../images/pepsi.png";
import sprite from "../../../images/sprite.png";


const BellIngredient = ({ type,fixed }) => {
  const types = {
    cola: { backgroundImage: `url(${cola})`, width: "180px", height: "180px" },
    fanta: { backgroundImage: `url(${fanta})`, width: "70px", height: "70px" },
    flesh: { backgroundImage: `url(${flesh})`, width: "70px", height: "70px" },
    nitro: { backgroundImage: `url(${nitro})`, width: "70px", height: "70px" },
    pepsi: { backgroundImage: `url(${pepsi})`, width: "70px", height: "70px" },
    sprite: { backgroundImage: `url(${sprite})`, width: "70px", height: "70px" },
  };
  return (
    <div className={classes.BellIngredient} style={types[type]}></div>
  );
}
export default BellIngredient;