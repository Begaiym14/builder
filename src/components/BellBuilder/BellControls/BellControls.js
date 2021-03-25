  
import BellControl from "./BellControl/BellControl";
import classes from "./BellControls.module.css";

const BellControls = ({ ingredients }) => {
  const results = [];
  for (const ingredient in ingredients) {
    results.push(<BellControl type={ingredient} />)
  }

  return (
    <div className={classes.BellControls}>
      {results}
    </div>
  );
}

export default BellControls;