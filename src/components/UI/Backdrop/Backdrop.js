import classes from "../../UI/Backdrop/Backdrop";

const Backdrop = ({ show, click }) => {
  return (
    show ? <div className={classes.Backdrop} onClick={click}></div> : null
  );
}

export default Backdrop;