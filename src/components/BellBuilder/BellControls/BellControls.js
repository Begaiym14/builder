import Button from "../../Ul/Button/Button";
import BellControl from "./BellControl/BellControl";
import classes from "./BellControls.module.css";

const BellControls = ({ ingredients, addIngredient, removeIngredient, canBuy }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<BellControl
      key={ingredient}
      add={addIngredient}
      remove={removeIngredient}
      type={ingredient} />)
  }

  return (
    <div className={classes.BellControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!canBuy}>Order</Button>
    </div>
  );
}

export default BellControls;