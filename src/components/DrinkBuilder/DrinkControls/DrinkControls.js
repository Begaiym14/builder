import Button from "../../UI/Button/Button";
import BellControl from "./BellControl/BellControl";
import classes from "./BellControls.module.css";

const BellControls = ({
  drinks,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const drink in drinks) {
    // Add ingredient number to totals number
    total += drinks[drink];
    // Render pizza control for this ingredient
    results.push(<BellControl
      key={drink}
      count={drinks[drink]}
      type={drink} />)
  }

  return (
    <div className={classes.BellControls}>
      <strong>drink</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default BellControls;