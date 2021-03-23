import classes from "./BellBuilder.module.css";
import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";

const BellBuilder = () => {
  return (
    <div className={classes.BellBuilder}>
      <BellPreview />
      <BellControls />
    </div>
  );
}

export default BellBuilder;