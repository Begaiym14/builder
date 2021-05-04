import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";

import classes from "./BellBuilder.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useSelector } from "react-redux";

const BellBuilder = ({ history }) => {
  const prices = {
    blue: 1,
    pink: 1,
    purple: 1,
    red: 1,
    white: 1,
    yellow: 1,
  };
  const ingredients = useSelector(state => state.ingredients);
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  // useEffect(loadDefaults, []);

  // function loadDefaults() {
  //   axios
  //     .get('https://builder-a51d0-default-rtdb.firebaseio.com/default.json')
  //     .then(response => {
  //       setPrice(response.data.price);

  //       // For arrays
  //       // setIngredients(Object.values(response.data.ingredients));
  //       // For objects
  //       setIngredients(response.data.ingredients);
  //     });
  // }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
   
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
     
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    axios
      .post('https://builder-a51d0-default-rtdb.firebaseio.com/orders.json', {
        ingredients: ingredients,
        price: price,
        address: "1234 Jusaeva str",
        phone: "0 777 777 777",
        name: "Sadyr Japarov",
      })
      .then(() => {
        setOrdering(false);
        // loadDefaults();
        history.push('/checkout');
      });
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
        cancel={stopOrdering}>
        <OrderSummary
          ingredients={ingredients}
          price={price}
        />
        <Button onClick={finishOrdering} green>Checkout</Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
}

export default BellBuilder;