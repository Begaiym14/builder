import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";

import classes from "./BellBuilder.module.css";


const BellBuilder = () => {
  const ingredients = {
    tomato: 20,
    salami: 20,
    greenOlive: 20,
    blackOlive: 20,
    redPepper: 20,
    yellowPepper: 15,
  };

  return (
    <div className={classes.BellBuilder}>
      <BellPreview ingredients={ingredients} />
      <BellControls />
    </div>
  );
}

export default BellBuilder;