import Button from "../../../UI/Button/Button";
import classes from "./BellControl.module.css";
import { useDispatch } from "react-redux";

const BellControl = ({ type, count }) => {
  const dispatch = useDispatch();
  const names = {
    dumai: "dumai",
    kay:"kay",
  }

  return (
    <div className={classes.BellControl}>
      <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", animal: type })}>+</Button>
      <div className={classes.ingredient}>
        {names[type]}
      </div>
      <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", animal: type })} disabled={!count}>-</Button>
    </div>
  );
}

export default BellControl;






















// import { useDispatch } from "react-redux";
// import Button from "../../../UI/Button/Button";
// import BellIngredient from "../../BellIngredient/BellIngredient";
// import classes from "./BellControl.module.css";

// const BellControl = ({ type, count }) => {
//   const dispatch = useDispatch();
// const names() ={
//   blue: "Blue",
//   red: "Red",
//   pink: "Pink",
//   purple: "Purple",
//   white: "White",
//   yellow: "Yellow",
// }
//   return (
//     <div className={classes.BellControl}>
//       <Button onClick={() => dispatch({ type: "ADD_INGREDIENT", ingredient: type })}>+</Button>
//       <div className={classes.ingredient}>
//         {/* <BellIngredient type={type} fixed /> */}
//         {name[type]}
//       </div>
//       <Button onClick={() => dispatch({ type: "REMOVE_INGREDIENT", ingredient: type })} disabled={!count}>-</Button>
//     </div>
//   );
// }

// export default BellControl;