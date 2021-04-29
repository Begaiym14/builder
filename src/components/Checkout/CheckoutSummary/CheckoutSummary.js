import classes from "./CheckoutSummary.module.css";
import PizzaPreview from "../../PizzaBuilder/PizzaPreview/PizzaPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const CheckoutSummary = ({ submitCallback, cancelCallback }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <div>
        <PizzaPreview ingredients={{
         blue: 100,
         red: 100,
         pink: 100,
         purple: 100,
         white: 100,
         yellow: 100,
       }} price={150}  />
      </div>
      <CheckoutForm
        submitCallback={submitCallback}
        cancelCallback={cancelCallback} />
    </div>
  );
}
 
export default CheckoutSummary;

        