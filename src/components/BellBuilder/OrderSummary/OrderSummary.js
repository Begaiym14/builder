import classes from "./OrderSummary.module.css";

const OrderSummary = ({ medicines, price }) => {
  const labels = {
    blue: "Blue",
    red: "Red",
    pink: "Pink",
    purple: "Purple",
    white: "White",
    yellow: "Yellow",
  }
  const results = Object.keys(medicines)
    .map(type => <li>{labels[type]}: {medicines[type]}</li>);

  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary</h3>
      <ul>
        {results}
      </ul>
      <strong>Total price: {price.toFixed(1)} som</strong>
    </div>
  );
}

export default OrderSummary;