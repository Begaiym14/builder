import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";

import classes from "./BellBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Ul/Modal/Modal";

const BellBuilder = () => {
  const prices = {
    blue: 3.5,
    red: 4,
    pink: .3,
    purple: .3,
    white: 2,
    yellow: 1,
  };
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);


  useEffect(() => {
    axios.get('https://builder-be2e1-default-rtdb.firebaseio.com/defauld.json')
      .then(response => {
        setIngredients(response.data.ingredients);
        setPrice(response.data.price);
      });
  }, []);

  useEffect(
    () => axios
      .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
      .then(response => {
        setPrice(response.data.price);

        // For arrays
        // setIngredients(Object.values(response.data.ingredients));
        // For objects
        setIngredients(response.data.ingredients);
      }), []
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.BellBuilder}>
      <BellPreview
        ingredients={ingredients}
        price={price} />
      <BellControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
      />
      <Modal
        show={ordering}
        cancel={stopOrdering}>Hello</Modal>
    </div>
  );
}

export default BellBuilder;