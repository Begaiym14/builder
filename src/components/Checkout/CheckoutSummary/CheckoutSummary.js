import classes from "./CheckoutSummary.module.css";
import BellPreview from "../../BellBuilder/BellPreview/BellPreview";
import Button from "../../Ul/Button/Button";

const CheckoutSummary = ({ cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BellPreview ingredients={{
          blue: 100,
          red: 100,
          pink: 100,
          purple: 100,
          white: 100,
          yellow: 100,
        }} price={150} />
      </div>
      <div>
        <Button>Checkout</Button>
        <Button onClick={cancelCallback}>Cancel</Button>
      </div>
    </div>
  );
}

export default CheckoutSummary;