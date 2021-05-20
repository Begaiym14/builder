import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/biulder";
import Button from "../../../UI/Button/Button";
import Drink from "../../Drink/Drink";
import classes from "./BellControl.module.css";

const BellControl = ({ type, count }) => {
  const dispatch = useDispatch();

  const names = {
    cola: "cola",
    fanta: "fanta",
    flesh: "flesh",
    nitro: "nitro",
    pepsi: "pepsi",
    sprite: "sprite"
  }
  return (
    <div className={classes.BellControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.drink}>
        {names[type]}
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>

    </div>
  );
}

export default BellControl;