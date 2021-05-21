import { useDispatch } from "react-redux";
import { add, remove } from "../../../../store/actions/biulder";
import Button from "../../../UI/Button/Button";
import classes from "./DrinkControl.module.css";

const DrinkControl = ({ type, count }) => {
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
    <div className={classes.DrinkControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.drink}>
        {names[type]}
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>

    </div>
  );
}

export default DrinkControl;