import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HeaderOne from "./components/headerOne/headerOne";
import HeaderTwo from './components/headerTwo/Two'
import HeaderThree from './components/headerThree/Three'
import MainHome from './pages/Home/MainHome'
import MainLogin from './pages/RegisterAnhLogin/mainlogin'
import ProductId from './pages/DetailProduct/ProductId'
import ContainerSearch from './pages/Search/ContainerSeach'
import Registration from './pages/RegisterAnhLogin/register'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Cart from './pages/shopcart/cart'
import CheckOut from './pages/shopcart/checkout'
import axios from 'axios'
import { useState,useEffect } from "react";
import { reach } from "yup";
import {useDispatch} from 'react-redux'
import Footer from './pages/Footer/footer'
import HomeIntroduction from './pages/Main/homeIntroduction'
function App() {
  
  const [isAuth,setIsAuth] = useState({});
  const dispatch = useDispatch();
  // let history = useHistory();
  axios.defaults.withCredentials = true;
  useEffect(() => {
      axios.get('http://localhost:3001/get_profile')
          .then((res) => {
            setIsAuth(res.data)
            if(res.data.login == false) {
              window.sessionStorage.setItem('Login','not')
              console.log(res.data.login)
            } else {
              window.sessionStorage.removeItem('Login')
              window.sessionStorage.removeItem('Cart')
              window.sessionStorage.removeItem('Address')
              dispatch({type: "ADDTOCART"})
            }
          })
          console.log('a')
          
          document.querySelector('.header-cart').style.display = 'block';
  },[])
  

  return (
    <div className="App">
      <Router>
        <div className="header-app">
          <HeaderOne profile={isAuth} />
          <div className="header-hai">
            <HeaderTwo />
          </div>
          <div className="header-ba">
            <HeaderThree />
          </div>
          
        </div>
        <Switch>
          <Route path="/giay" exact component={MainHome} />
          <Route path="/" exact component={HomeIntroduction} />
          {/* <Route path="/login" exact component={() => <MainLogin />} /> */}
          <ProtectedRoute path='/login' component={MainLogin} isAuth={isAuth}/>
          <Route path="/shoes/:id" exact component={ProductId} />
          <Route path="/search" exact component={ContainerSearch} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/shopCart"
          //  exact component={Cart} 
           >
              <Cart/>
           </Route>
          <Route path="/checkout" exact component={CheckOut} />
        </Switch>
          {/* < Footer /> */}
      </Router>
    </div>
  );
}

export default App;