import classes from "./BellIngredient.module.css";
import blueBackground from "../../../images/blue.png";
import redBackground from "../../../images/red.png";
import pinkBackground from "../../../images/pink.png";
import purpleBackground from "../../../images/purple.png";
import whiteBackground from "../../../images/white.png";
import yellowBackground from "../../../images/yellow.png";

const BellIngredient = ({ type, fixed }) => {
  const types = {
    blue: { backgroundImage: `url(${blueBackground})`, width: "15px", height: "15px" },
    red: { backgroundImage: `url(${redBackground})`, width: "15px", height: "15px" },
    pink: { backgroundImage: `url(${pinkBackground})`, width: "15px", height: "15px" },
    purple: { backgroundImage: `url(${purpleBackground})`, width: "15px", height: "15px" },
    white: { backgroundImage: `url(${whiteBackground})`, width: "15px", height: "15px" },
    yellow: { backgroundImage: `url(${yellowBackground})`, width: "15px", height: "15px" },
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