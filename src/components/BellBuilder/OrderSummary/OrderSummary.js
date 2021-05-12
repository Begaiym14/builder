import classes from "./OrderSummary.module.css";

const OrderSummary = ({ medicines, price }) => {
  const labels = {
    aprovel: "Aprovel",
    festalN: "FestalN",
    lazolvan: "Lazolvan",
    lozap: "Lozap",
    magneB: "MagneB",
    noshpa: "Noshpa",
    telzapplus: "Telzapplus",
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