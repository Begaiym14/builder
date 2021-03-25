import salamiBackground from "../../../images/salami.svg";
import tomatoBackground from "../../../images/tomato.svg";
import blackOliveBackground from "../../../images/blackOlive.svg";
import greenOliveBackground from "../../../images/greenOlive.svg";
import redPepperBackground from "../../../images/redPepper.svg";
import yellowPepperBackground from "../../../images/yellowPepper.svg";

import classes from "./BellIngredient.module.css";

const BellIngredient = ({ type }) => {
    const types = {
        salami: { backgroundImage: `url(${salamiBackground})`, width: "35px", height: "35px" },
        tomato: { backgroundImage: `url(${tomatoBackground})`, width: "35px", height: "35px" },
        blackOlive: { backgroundImage: `url(${blackOliveBackground})`, width: "10px", height: "10px" },
        greenOlive: { backgroundImage: `url(${greenOliveBackground})`, width: "10px", height: "10px" },
        redPepper: { backgroundImage: `url(${redPepperBackground})`, width: "20px", height: "20px" },
        yellowPepper: { backgroundImage: `url(${yellowPepperBackground})`, width: "40px", height: "40px" },
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
    const position = getPosition(types[type].width);
    types[type].top = position.top + "px";
    types[type].left = position.left + "px";
    // Get random rotation for this ingredient.
    types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;

    return (
        <div className={classes.BellIngredient} style={types[type]}></div>
    );
}

export default BellIngredient;