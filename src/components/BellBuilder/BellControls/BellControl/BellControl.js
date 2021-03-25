import BellIngredient from "../../BellIngredient/BellIngredient";
import classes from "./BellControl.module.css";

const BellControl = (type, count) => {
    return (
        <div className={classes.BellControl}>
            <button className={classes.more}>+</button>
            <div className={classes.ingredient}>
                <BellIngredient type={type} fixed />
            </div>
            <button className={classes.less}>-</button>
        </div >
    );
}

export default BellControl;