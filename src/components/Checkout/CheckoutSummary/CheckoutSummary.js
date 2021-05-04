import classes from "./CheckoutSummary.module.css";
import BellPreview from "../../BellBuilder/BellPreview/BellPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import { useSelector } from "react-redux";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  const ingredients = useSelector(state => state.ingredients);
  const price = useSelector(state => state.price);
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <BellPreview ingredients={ingredients = { ingredients }} price={price} />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}

export default CheckoutSummary;

