//GLOBAL STYLES
import GlobalStyles from "./components/global/GlobalStyles";
// ROUTER DOM
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//COMPONENTS
import Navbar from './components/navbar3/Navbar'
//PAGES
import Home from "./pages/";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
