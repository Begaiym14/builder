import classes from "./Logo.module.css";
import logo from "../../../images/logo.svg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Bell project" />
      <div>medicine</div>
      {/* <div>Graduate</div> */}
    </div>
  );
}

export default Logo;