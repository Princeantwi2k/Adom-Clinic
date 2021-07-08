import Nav from './Component/Navbar/Nav';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import Service from './Service/Service';
import Footer from './Component/Footer/Footer';
import Contact from './Contact/Contact';
import Health from './Component/Health/Health';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
     <Router>
    <div className="App">
    <Nav />
    <Switch>
      <Route path="/" exact component={Home} />
    <Route path="/about"  component={About} />
    <Route path="/service" component={Service} />
    <Route path="/contact" component={Contact} />
    <Route path="/health" component={Health} />
    </Switch>
    <Footer />
    </div>
    </Router>
  );
}

export default App;
