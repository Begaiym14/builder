import classes from "./Logo.module.css";
import logo from "../../../images/booklogo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Bell project" />
      <div>Book</div>
      {/* <div>Graduate</div> */}
    </div>
  );
}

export default Logo;