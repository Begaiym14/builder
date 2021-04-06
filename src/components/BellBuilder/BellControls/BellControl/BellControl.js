import Button from "../../../Ul/Button/Button";
import BellIngredient from "../../BellIngredient/BellIngredient";
import classes from "./BellControl.module.css";

const BellControl = ({ type, add, remove }) => {
  return (
    <div className={classes.BellControl}>
      <Button className={classes.more} onClick={() => add(type)}>+</Button>
      <div className={classes.ingredient}>
        <BellIngredient type={type} fixed />
      </div>
      <Button className={classes.less} onClick={() => remove(type)}>-</Button>
    </div>
  );
}

export default BellControl;