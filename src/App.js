import Layout from "./components/Layout/Layout";
import DrinkBuilder from "./components/DrinkBuilder/DrinkBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <h1 className="drink">drink</h1>
        <Switch>
          <Route path="/" component={DrinkBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;