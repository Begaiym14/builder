import Drink from "../Drink/Drink"
import classes from "./BellPreview.module.css";


const BellPreview = ({ drinks, price }) => {
  const result = [];
  for (const drink in drinks) {
    for (let i = 0; i < drinks[drink]; i++) {
      result.push(<Drink key={drink + i} type={drink} />)
    }
  }
  return (
    <div className={classes.BellPreview}>
      <div className={classes.bell}>
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default BellPreview;











// import BellIngredient from "../BellIngredient/BellIngredient";

// import classes from "./BellPreview.module.css";

// const BellPreview = ({ drinks, price }) => {
//   const result = [];
//   for (const drink in drinks) {
//     for (let i = 0; i < drinks[drink]; i++) {
//       result.push(<BellIngredient key={drink + i} type={drink} />)
//     }
//   }

//   return (
//     <div className={classes.BellPreview}>
//       <div
//         className={classes.bell}>
//         <div className={classes.drink}>
//           {/* <img src={lenta} alt="#" /> */}
//           {result}
//         </div>
//       </div>
//       <div className={classes.price}>{price.toFixed(1)} som</div>
//     </div>
//   );
// }

// export default BellPreview;