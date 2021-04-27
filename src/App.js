import Layout from "./components/Layout/Layout";
import BellBuilder from "./components/BellBuilder/BellBuilder";
import Checkout from "./components/Checkout/Checkout";

import "./App.css";

import { Redirect, Route, Switch } from "react-router";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" component={BellBuilder} exact />
          <Route path="/checkout" component={Checkout} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;