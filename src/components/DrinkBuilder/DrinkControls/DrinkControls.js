import Button from "../../UI/Button/Button";
import DrinkControl from "./DrinkControl/DrinkControl";
import classes from "./DrinkControls.module.css";

const DrinkControls = ({
  drinks,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const drink in drinks) {
    total += drinks[drink];

    results.push(
      <DrinkControl
        key={drink}
        count={drinks[drink]}
        type={drink} />)
  }

  return (
    <div className={classes.DrinkControls}>
      <strong>Drink</strong>
      {results}
      <Button disabled={!total}
        onClick={startOrdering}>
        Order
        </Button>
    </div>
  );
}

export default DrinkControls;