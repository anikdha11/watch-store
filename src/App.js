import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contexts/AuthProvider';
import AddToCart from './Pages/AddToCart/AddToCart';
import DashBoard from './Pages/DashBoard/DashBoard';
import Explore from './Pages/Explore/Explore';
import Home from './Pages/Home/home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import NotFound from './Pages/NotFound/NotFound';
import Payment from './Pages/payment/Payment';
import Review from './Pages/Reviwe/Review';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
        
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
            <Route path="/review"> 
              <Review></Review>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment></Payment>
            </PrivateRoute>
            <Route path="/Register">
              <Register></Register>
            </Route>
            <Route path="/dashboard">
         <DashBoard></DashBoard>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        
        </BrowserRouter>
      </AuthProvider>


    </div>
  );
}

export default App;
