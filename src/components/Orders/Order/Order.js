import classes from "./Order.module.css";

const Order = ({ name, phone, address, drinks,price }) => {
  const output = Object.keys(drinks).map(label => <em key={label}>{label} - {drinks[label]}</em>)
  return (
    <ul className={classes.Order}>
      <li>Name: {name}</li>
      <li>Phone: {phone}</li>
      <li>Address: {address}</li>
      <li>drinks: {output}</li>
     <strong>Price:{price}</strong>  
       </ul>
  );
}

export default Order;








// import classes from "./Order.module.css";

// const Order = ({ name, phone, address, drinks, price }) => {
//   const output = Object.keys(drinks).map(label => <em key={label}>{label} - {drinks[label]}</em>)

//   return (
//     <ul className={classes.Order}>
//       <li>Name: {name}</li>
//       <li>Phone: {phone}</li>
//       <li>Address: {address}</li>
//       <li>drinks: {output}</li>
//       <strong>Price:{price}</strong>
//     </ul>
//   );
// }

// export default Order;

