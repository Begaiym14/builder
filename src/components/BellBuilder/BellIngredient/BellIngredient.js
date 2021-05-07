import classes from "./BellIngredient.module.css";
import dumaiBackground from "../../../images/dumai.png";
import kayBackground from "../../../images/kay.png";


const BellIngredient = ({ type }) => {
  const types = {
    dumai: { backgroundImage: `url(${dumaiBackground})`, width: "70px", height: "70px" },
    kay: { backgroundImage: `url(${kayBackground})`, width: "70px", height: "70px" },
  };
  return (
    <div className={classes.BellIngredient} style={types[type]}></div>
  );
}
export default BellIngredient;