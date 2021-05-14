import classes from "./Order.module.css";

const Order = ({ name, phone, address, drinks, price }) => {
  const outputDrinks = Object.keys(drinks)
    .map(drink => <em>{drink} - {drinks[drink]}</em>);

  return (
    <div className={classes.Order}>
      <div>{name}, {phone}, {address}</div>
      <div>{outputDrinks}</div>
      <strong>{price}</strong>
    </div>
  );
}

export default Order;