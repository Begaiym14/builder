import classes from "./BellIngredient.module.css";

// import booklogoBackground from "../../../images/booklogo.png";
import dumaiBackground from "../../../images/dumai.png";


const BellIngredient = ({ type }) => {
  const types = {
    // booklogo: { backgroundImage: `url(${booklogoBackground})`, width: "10px", height: "10px" },
    dumai: { backgroundImage: `url(${dumaiBackground})`, width: "70px", height: "70px" },
  };
  return (
    <div className={classes.BellIngredient} style={types[type]}></div>
  );
}
export default BellIngredient;