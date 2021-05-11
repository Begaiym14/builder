import Layout from "./components/Layout/Layout";
import BellBuilder from "./components/BellBuilder/BellBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <h1 className="medicine">medicine</h1>
        <Switch>
          <Route path="/" component={BellBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;