import classes from "./BellBuilder.module.css";
import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";

const BellBuilder = () => {
  const ingredients = {
    tomatoes: 10,
    salami: 20,
    olives: 10,
  };


  return (
    <div className={classes.BellBuilder}>
      <BellPreview ingredients={ingredients} />
      <BellControls />
    </div>
  );
}

export default BellBuilder;