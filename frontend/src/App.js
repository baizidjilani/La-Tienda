import './App.css';
import Checkout from './components/Checkout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


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
import Seller from './components/Seller';
import SellerLogin from './components/SellerLogin';
import SellerAddProduct from './components/SellerAddProduct';
import Update from './components/Update';
import Admin from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import AdminUsers from './components/AdminUsers';
import AdminSellers from './components/AdminSellers';
import AdminProducts from './components/AdminProducts';
import AdminOrders from './components/AdminOrders';
import SellerSignup from './components/SellerSignup';
import SellerProfile from './components/SellerProfile';
import Products from './components/Products'
import ProductDescription from './components/ProductDescription'

function App() {
  return (
  <>
    <div className='App'>

    <Navbar2 />
    <Routes>

    <Route path='/' >
            <Route index element={<Products />} />
            <Route path=':id' element={<ProductDescription />} />
      </Route>
      <Route element = {<PrivateComponent/>}></Route>
      {/* <Route path = '/' element = {<Product2/>} /> */}
      <Route path = '/signup' element = {<Signup/>} />
      <Route path = '/logout' element = {<Logout/>} />
      <Route path = '/openbankaccount' element = {<OpenBankAccount/>} />
      <Route path = '/login' element = {<Login/>} />
      <Route path='seller/profile' element = {<SellerProfile />} />

      <Route path = '/admin' element = {<Admin/>} >
        <Route path='dashboard' element = {<AdminDashboard />} />
        <Route path='products' element = {<AdminProducts />} />
        <Route path='orders' element = {<AdminOrders />} />
        <Route path='users' element = {<AdminUsers />} />
        <Route path='sellers' element = {<AdminSellers />} />
      </Route>
      <Route path = '/seller/signup' element = {<SellerSignup/>} />
      <Route path = '/seller/login' element = {<SellerLogin/>} />
      <Route path = '/seller' element = {<Seller/>} >
        <Route path='dashboard' element = {<AdminDashboard />} />
        
        <Route path='add_Product' element = {<SellerAddProduct/>} />
      </Route>
      <Route path = '/orderconfirmation' element = {<OrderConfirmation/>} />
      <Route path = '/update/:id' element = {<Update/>} />
      <Route element = {<PrivateComponent/>}>
      <Route path = '/profile' element = {<UserProfile/>} />
      <Route path = '/checkout' element = {<Checkout/>} />
      <Route path = '/productdetails/:id' element = {<ProductDetails/>} />
      <Route path = '/transaction' element = {<Checkout/>} />
      </Route>
    </Routes>
    </div>
  </>
  );
}


export default App;
