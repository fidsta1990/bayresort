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
import Rooms from "./pages/Rooms";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/rooms" component={Rooms} />
        <Route path="/attractions" component={Attractions} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
