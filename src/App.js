import Layout from "./components/Layout/Layout";
import BellBuilder from "./components/BellBuilder/BellBuilder";


import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <BellBuilder />
      </Layout>
    </div>
  );
}

export default App;
