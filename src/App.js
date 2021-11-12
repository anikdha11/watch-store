import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddToCart from './Pages/AddToCart/AddToCart';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/home/Home';
import Footer from './Pages/Home/Shared/Footer/Footer';
import Navegation from './Pages/Home/Shared/Header/Navegation';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
        <Navegation></Navegation>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/product/:nameId">
         <AddToCart></AddToCart>
          </Route>
          <Route path="/explore">
       <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/Register">
           <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
  
  
    </div>
  );
}

export default App;
