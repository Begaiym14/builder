import BellIngredient from "../../BellIngredient/BellIngredient";
import classes from "./BellControl.module.css";

const BellControl = ({ type, add, remove }) => {
  return (
    <div className={classes.BellControl}>
      <button className={classes.more} onClick={() => add(type)}>+</button>
      <div className={classes.ingredient}>
        <BellIngredient type={type} fixed />
      </div>
      <button className={classes.less} onClick={() => remove(type)}>-</button>
    </div>
  );
}

export default BellControl;