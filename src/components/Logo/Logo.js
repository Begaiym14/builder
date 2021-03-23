import classes from "./Logo.module.css";
import logo from "../../images/logo.png";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Logo of the Bell project" />
            <span>Bell</span>
        </div>
    );
}

export default Logo;



