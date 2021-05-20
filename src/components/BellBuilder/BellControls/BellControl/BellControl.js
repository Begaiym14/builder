import { useDispatch } from "react-redux";
import Button from "../../../UI/Button/Button";
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
    <div className={classes.SandwichControl}>
      <div className={classes.Example}>
        <Button className="order" onClick={() => dispatch({ type: "ADD_DRINK", drink: type })}>+</Button>

        <div className={classes.drink}>
          {names[type]}
        </div>

        <Button className="order" onClick={() => dispatch({ type: "REMOVE_DRINK", drink: type })} disabled={!count}>-</Button>
      </div>

    </div>
  );
}

export default BellControl;