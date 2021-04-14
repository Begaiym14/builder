import logo from "../../../images/logo2.svg";

import classes from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Logo of the Bell project" />
            <div>Graduate</div>
        </div>
    );
}

export default Logo;



