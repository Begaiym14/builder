import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";

import classes from "./BellBuilder.module.css";
import { useState } from "react";

const BellBuilder = () => {
  const [ingredients, setIngredients] = useState({
    tomato: 1,
    salami: 1,
    greenOlive: 1,
    blackOlive: 1,
    redPepper: 1,
    yellowPepper: 1,
  });

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]--;
    setIngredients(newIngredients);
  }

  return (
    <div className={classes.BellBuilder}>
      <BellPreview ingredients={ingredients} />
      <BellControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        />
    </div>
  );
}

export default BellBuilder;