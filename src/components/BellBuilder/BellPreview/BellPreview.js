import BellIngredient from "../BellIngredient/BellIngredient";
import ingredientsBackground from "../../../images/cheese.svg";

import classes from "./BellPreview.module.css";

const BellPreview = ({ ingredients }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<BellIngredient type={ingredient} />)
    }
  }

  return (
    <div className={classes.BellPreview}>
      <div
        className={classes.ingredients}
        style={{ backgroundImage: `url(${ingredientsBackground})` }}>
        {result}
      </div>
    </div>
  );
}

export default BellPreview;