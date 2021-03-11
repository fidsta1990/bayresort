//GLOBAL STYLES
import GlobalStyles from "./components/global/GlobalStyles";
// ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTS
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
//PAGES
import Home from "./pages/";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
