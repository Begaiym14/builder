import classes from "./BellIngredient.module.css";
import blueBackground from "../../../images/blue.svg";
import redBackground from "../../../images/red.svg";
import pinkBackground from "../../../images/pink.svg";
import purpleBackground from "../../../images/purple.svg";
import whiteBackground from "../../../images/white.svg";
import yellowBackground from "../../../images/yellow.svg";

const BellIngredient = ({ type, fixed }) => {
  const types = {
    blue: { backgroundImage: `url(${blueBackground})`, width: "35px", height: "35px" },
    red: { backgroundImage: `url(${redBackground})`, width: "35px", height: "35px" },
    pink: { backgroundImage: `url(${pinkBackground})`, width: "10px", height: "10px" },
    purple: { backgroundImage: `url(${purpleBackground})`, width: "10px", height: "10px" },
    white: { backgroundImage: `url(${whiteBackground})`, width: "20px", height: "20px" },
    yellow: { backgroundImage: `url(${yellowBackground})`, width: "40px", height: "40px" },
  };

  function getPosition(ingredientWidth) {
    const bellDiameter = 380;
    const bellRadius = bellDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * bellDiameter);
    const ingredientLeft = Math.round(Math.random() * bellDiameter);

    const distance = Math.sqrt(
      Math.pow(ingredientTop - bellRadius, 2) + Math.pow(ingredientLeft - bellRadius, 2)
    ) + ingredientRadius;

    return distance < bellRadius
      ? {
        top: ingredientTop - ingredientRadius,
        left: ingredientLeft - ingredientRadius
      }
      : getPosition(ingredientWidth);
  }

  // Get random position for this ingredient.
  if (!fixed) {
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
  }
  // Get random rotation for this ingredient.
  types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

  return (
    <div className={classes.BellIngredient} style={types[type]}></div>
  );
}

export default BellIngredient;