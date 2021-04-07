import Button from "../../../Ul/Button/Button";
import BellIngredient from "../../BellIngredient/BellIngredient";
import classes from "./BellControl.module.css";

const BellControl = ({ type, add, remove, count }) => {
  return (
    <div className={classes.BellControl}>
      <Button onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <BellIngredient type={type} fixed />
      </div>
      <Button onClick={() => remove(type)} disabled={!count}>-</Button>
    </div>
  );
}

export default BellControl;