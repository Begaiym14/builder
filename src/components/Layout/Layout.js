import { useState } from "react";
import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import Drawer from "../Layout/Drawer/Drawer";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.Layout}>
      <Toolbar openDrawer={() => setDrawerOpen(true)} />
      <Drawer open={drawerOpen} closeDrawer={() => setDrawerOpen(false)} />
      <main>
        {children}
      </main>
    </div>
  );
}

export default Layout;