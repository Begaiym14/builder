import BellIngredient from "../BellIngredient/BellIngredient";
// import ingredientsBackground from "../../../images/cheese.svg";

import classes from "./BellPreview.module.css";

const BellPreview = ({ ingredients, price }) => {
  const result = [];
  for (const ingredient in ingredients) {
    for (let i = 0; i < ingredients[ingredient]; i++) {
      result.push(<BellIngredient key={ingredient + i} type={ingredient} />)
    }
  }

  return (
    <div className={classes.BellPreview}>
      <div className={classes.bell}>
        {/* <div
          className={classes.ingredients}
          style={{ backgroundImage: `url(${ingredientsBackground})` }}>
          {result}
        </div> */}
      </div>
      <div className={classes.price}>{price.toFixed(1)} som</div>
    </div>
  );
}

export default BellPreview;