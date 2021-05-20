import DrinkPreview from "./DrinkPreview/DrinkPreview";
import DrinkControls from "./DrinkControls/DrinkControls";
import withAxios from '../withAxios';
import axios from '../../axios';
import classes from "./DrinkBuilder.module.css";
import { useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import { load } from '../../store/actions/biulder';


const DrinkBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const drinks = useSelector(state => state.builder.drinks);
  const price = useSelector(state => state.builder.price);
  const [ordering, setOrdering] = useState(false);
  
  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    setOrdering(false);
    history.push('/checkout');
  }

  return (
    <div className={classes.DrinkBuilder}>
      <DrinkPreview
        drinks={drinks}
        price={price} />
      <DrinkControls
        drinks={drinks}
        startOrdering={startOrdering}
        />
      <Modal
        show={ordering}
        cancel={stopOrdering}>
          <OrderSummary
            drinks={drinks}
            price={price}
            />
          <Button onClick={finishOrdering} green="green">Checkout</Button>
          <Button onClick={stopOrdering}>Cancel</Button>
        </Modal>
    </div>
  );
}
  

export default withAxios(DrinkBuilder, axios);