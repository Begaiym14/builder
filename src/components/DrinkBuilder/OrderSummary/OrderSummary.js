import classes from "./OrderSummary.module.css";

const OrderSummary = ({ drinks, price }) => {
  const labels = {
    cola: "Cola",
    fanta: "Fanta",
    flesh: "Flesh",
    nitro: "Nitro",
    pepsi: "Pepsi",
    sprite: "Sprite",
  }
  const results = Object.keys(drinks)
    .map(type => <li key={type}>{labels[type]}: {drinks[type]}</li>);

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