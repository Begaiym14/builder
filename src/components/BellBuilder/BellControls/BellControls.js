import Button from "../../UI/Button/Button";
import BellControl from "./BellControl/BellControl";
import classes from "./BellControls.module.css";

const BellControls = ({
  ingredients,
 
  startOrdering
}) => {
  const results = [];
  let total = 0;
  for (const ingredient in ingredients) {
  
    total += ingredients[ingredient];
   
    results.push(<BellControl
        key={ingredient}
        count={ingredients[ingredient]}
        type={ingredient} />)
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