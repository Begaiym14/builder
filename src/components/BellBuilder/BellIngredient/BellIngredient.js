import classes from "./BellIngredient.module.css";

const BellIngredient = ({ type }) => {
  return (
    <div className={classes.BellIngredient}>{type}</div>
  );
}

export default BellIngredient;