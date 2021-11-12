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
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';

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
          <PrivateRoute path="/product/:nameId">
         <AddToCart></AddToCart>
          </PrivateRoute>
          <Route path="/explore">
       <Explore></Explore>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/myorders">
            <MyOrders></MyOrders>
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
