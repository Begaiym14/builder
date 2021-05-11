import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/biulder";
import Button from "../../../UI/Button/Button";
import BellIngredient from "../../BellIngredient/BellIngredient";
import classes from "./BellControl.module.css";

const BellControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.BellControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.medicine}>
        <BellIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
}

export default BellControl;