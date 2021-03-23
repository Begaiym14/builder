import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";
import DrawerOpen from "../Drawer/DrawerOpen/DrawerOpen";
import classes from "./Toolbar.module.css";

const Toolbar = ({ setDrawer}) => {
  return (
    <div className={classes.Toolbar}>
      <Logo />
      <Nav />
      <DrawerOpen setDrawerOpen={setDrawer} />
    </div>
  );
}

export default Toolbar;