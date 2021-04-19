import classes from "./BellIngredient.module.css";
import blueBackground from "../../../images/blue.png";
import redBackground from "../../../images/red.png";
import pinkBackground from "../../../images/pink.png";
import purpleBackground from "../../../images/purple.png";
import whiteBackground from "../../../images/white.png";
import yellowBackground from "../../../images/yellow.png";


const BellIngredient = ({ type, fixed }) => {
  const types = {

    blue: { backgroundImage: `url(${blueBackground})`, width: "60px", height: "60px" },
    red: { backgroundImage: `url(${redBackground})`, width: "50px", height: "50px" },
    pink: { backgroundImage: `url(${pinkBackground})`, width: "50px", height: "50px", },

    purple: { backgroundImage: `url(${purpleBackground})`, width: "50px", height: "50px" },

    white: { backgroundImage: `url(${whiteBackground})`, width: "50px", height: "50px" },
    yellow: { backgroundImage: `url(${yellowBackground})`, width: "50px", height: "50px" },
  };
  return (
    <div className={classes.BellIngredient} style={types[type]}></div>
  );
}
export default BellIngredient;