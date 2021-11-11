import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home/Home';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Navegation from './Pages/Home/Shared/Header/Navegation';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navegation></Navegation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
