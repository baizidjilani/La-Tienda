import './App.css';
import Checkout from './components/Checkout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Admin from './components/Admin';
import Seller from './components/Seller';
import Transaction from './components/Tansaction';
import Signup from './components/Signup';
import Login from './components/Login';
import Product2 from './components/Product2';
import ProductDetails from './components/ProductDetails';
import UserProfile from './components/UserProfile';
import OpenBankAccount from './components/OpenBankAccount';
import Navbar2 from './components/Navbar2';
import OrderConfirmation from './components/OrderConfirmation';
import PrivateComponent from './components/PrivateComponent';
import Logout from './components/Logout';
import AddProduct from './components/AddProduct';
import Update from './components/Update';
import AdminDashboard from './components/AdminDashboard';
import AdminUsers from './components/AdminUsers';
import AdminSellers from './components/AdminSellers';
import AdminProducts from './components/AdminProducts';
import AdminOrders from './components/AdminOrders';

function App() {
  return (
  <>
    <div className='App'>

    <Navbar2 />
    <Routes>
      <Route element = {<PrivateComponent/>}></Route>
      <Route path = '/' element = {<Product2/>} />
      <Route path = '/signup' element = {<Signup/>} />
      <Route path = '/logout' element = {<Logout/>} />
      <Route path = '/openbankaccount' element = {<OpenBankAccount/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path = '/admin' element = {<Admin/>} >
        <Route path='dashboard' element = {<AdminDashboard />} />
        <Route path='products' element = {<AdminProducts />} />
        <Route path='orders' element = {<AdminOrders />} />
        <Route path='users' element = {<AdminUsers />} />
        <Route path='sellers' element = {<AdminSellers />} />
      </Route>
      <Route path = '/orderconfirmation' element = {<OrderConfirmation/>} />
      <Route path = '/seller' element = {<AddProduct/>} />
      <Route path = '/update/:id' element = {<Update/>} />
      <Route element = {<PrivateComponent/>}>
      <Route path = '/profile' element = {<UserProfile/>} />
      <Route path = '/checkout' element = {<Checkout/>} />
      <Route path = '/productdetails' element = {<ProductDetails/>} />
      <Route path = '/transaction' element = {<Transaction/>} />
      </Route>
    </Routes>
    </div>
  </>
  );
}


export default App;
