import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.sass"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/add-product" component={AddProduct} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
