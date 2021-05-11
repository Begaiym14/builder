import BellIngredient from "../BellIngredient/BellIngredient";
// import lenta from "../../../images/dumai.png";

import classes from "./BellPreview.module.css";

const BellPreview = ({ medicines, price }) => {
  const result = [];
  for (const medicine in medicines) {
    for (let i = 0; i < medicines[medicine]; i++) {
      result.push(<BellIngredient key={medicine + i} type={medicine} />)
    }
  }

  return (
    <div className={classes.BellPreview}>
      <div
        className={classes.bell}>
        <div className={classes.lenta}>
          {/* <img src={lenta} alt="#" /> */}
          {result}
        </div>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default BellPreview;