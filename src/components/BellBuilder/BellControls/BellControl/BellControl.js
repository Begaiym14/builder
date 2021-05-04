import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
import BellIngredient from "../../BellIngredient/BellIngredient";
import classes from "./BellControl.module.css";

const BellControl = ({ type, count }) => {
  const dispatch = useDispatch;
  return (
    <div className={classes.BellControl}>
      <Button onClick={() => dispatch({type:"ADD_INGREDIENT",ingredient:type})}>+</Button>
      <div className={classes.ingredient}>
        <BellIngredient type={type} fixed />
      </div>
      <Button onClick={() =>  dispatch({type:"REMOVE_INGREDIENT",ingredient:type})} disabled={!count}>-</Button>
    </div>
  );
}

export default BellControl;