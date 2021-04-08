import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/" active>Buider</NavItem>
      <NavItem url="/">Checkout</NavItem>
    </ul>
  );
}

export default Nav;