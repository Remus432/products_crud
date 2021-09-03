import ProductList from "./components/ProductList"
import AddProduct from "./components/AddProduct"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.sass"
import Logo from "./img/logo.png"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ProductList} />
          <Route path="/add-product" exact component={AddProduct} />
        </Switch>
      </Router>
      <footer className="footer">
        <img className="footer__logo" src={Logo} alt="Scandiweb Logo" />
        <p className="footer__p">Scandiweb Test Assignment</p>
      </footer>
    </div>
  );
}

export default App;
