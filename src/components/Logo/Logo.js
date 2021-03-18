import classes from "./Logo.module.css";
import logotip from "../../images/logotip.png"

const Logo = ({ }) => {
    return (
        <div className={classes.Logo}>
            <img src={logotip} />
            <span>Bell</span>
            
        </div>
    );
}

export default Logo;