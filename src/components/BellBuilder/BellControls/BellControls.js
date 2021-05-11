import Button from "../../UI/Button/Button";
import BellControl from "./BellControl/BellControl";
import classes from "./BellControls.module.css";

const BellControls = ({
  medicines,
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const medicine in medicines) {
    // Add ingredient number to totals number
    total += medicines[medicine];
    // Render pizza control for this ingredient
    results.push(<BellControl
      key={medicine}
      count={medicines[medicine]}
      type={medicine} />)
  }

  return (
    <div className={classes.BellControls}>
      <strong>Ingredients</strong>
      {results}
      <Button disabled={!total} onClick={startOrdering}>Order</Button>
    </div>
  );
}

export default BellControls;