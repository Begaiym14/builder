import classes from "./Logo.module.css";
import logo from "../../images/logo.png";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Bell logo" />
            <span>Bell Builber </span>
        </div>
    );
}

export default Logo;



