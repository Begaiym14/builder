import logo from "../../images/logo.png";

import classes from "./Logo.module.css";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt="Logo of the Bell project" />
            <div>Bells ribbon</div>
        </div>
    );
}

export default Logo;



