import Layout from "./components/Layout/Layout";
import DrinkBuilder from "./components/DrinkBuilder/DrinkBuilder";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout"
import Orders from "./components/Orders/Orders"
import Checkout from "./components/Checkout/Checkout"
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { restore } from "./store/actions/auth";
import { useEffect } from "react";

const App = () => {
  const disptach = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.token !== null);

  useEffect(() => {
    disptach(restore());
  }, [disptach]);

  let output = (
        <Switch>
          <Route path="/" component={DrinkBuilder} exact />
          <Route path="/auth" component={Auth} />
          <Redirect to="/" />
        </Switch>
  )
  if (isAuthenticated){
    output = (
      <Switch>
      <Route path="/" component={DrinkBuilder} exact />
      <Route path="/orders" component={Orders} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/auth" component={Auth} />
      <Route path="/logout" component={Logout} />
      <Redirect to="/" />
    </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
        {output}
      </Layout>
    </div>
  );
}

export default App;