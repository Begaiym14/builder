import BellPreview from "./BellPreview/BellPreview";
import BellControls from "./BellControls/BellControls";
import classes from "./BellBuilder.module.css";
import { useEffect, useState } from "react";
// import axios from "axios";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/biulder";

const BellBuilder = ({ history }) => {
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
    // loadDefaults();
    history.push('/checkout');
  }

  return (
    <div className={classes.BellBuilder}>
      <BellPreview
        drinks={drinks}
        price={price} />
      <BellControls
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
export default BellBuilder;