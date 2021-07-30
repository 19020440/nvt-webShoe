import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import axios from 'axios'
import {useSelector, useDispatch} from 'react-redux'
function Cart (props){
    const dispatch = useDispatch();
    const [cart, setCart] = useState([]);
    
    
    
    useEffect(() => {

        if(window.sessionStorage.getItem('Login') != null) {
            if(window.sessionStorage.getItem('Cart') != null) {
                setCart(JSON.parse(window.sessionStorage.getItem('Cart')))
            }
        } else {
            axios.get('http://localhost:3001/shopCart2')
                .then((res) => {
                    setCart(res.data)    
                    console.log(res.data)
                    })
        }
        },[useSelector(state => state.productOfCart)])

        const handleOnclick = (e) => {
            var IdOfProduct = e.target.getAttribute('data-id')
            var index = e.target.parentElement.parentElement.parentElement.getAttribute('data-id')
            console.log(index)
            var a = cart;
            console.log(a);
            a.splice(index,1)
            console.log(a);
           
            
            if(window.sessionStorage.getItem('Login') != null) {
                if(window.sessionStorage.getItem('Cart') != null) {
                    
                    window.sessionStorage.setItem('Cart', a);
                }
            } else {
                dispatch({type: "ADDTOCART"})
                axios.delete(`http://localhost:3001/removeCart/${IdOfProduct}`)
                    .then((res) => {
                        setCart(a);
                    })
            }
           
        }

        const handleOnLoad = () => {
            console.log('da load');
        }

        const handleOnError = (e, img) => {
            console.log('chua load')
            e.target.onLoad = () => {
                e.target.setAttribute('src', img)
            }
        }
        return (
            <div className="header-cart">
                <div className="header-cart-text">
                    <span> Giỏ hàng({cart.length})</span>
                    <Link to="/shopCart"><img src="https://img.icons8.com/emoji/15/000000/shopping-cart-emoji.png"/></Link>

                        <div className="header__cart-list">
                            
                            <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                   
                            
                            <ul className="header__cart-list-item">
                                 {cart.map((value, key) => {

                            return (
                                <li className="header__cart-item" data-id= {key}>
                                    <img src={value.image} 
                                    onLoad={() => handleOnLoad()}
                                    onError={(e) => handleOnError(e, value.image)}
                                     className="header__cart-img"></img>
                                    <div className="header__cart-item-info">
                                        <div className="header__cart-item-head">
                                            <h5 className="header__cart-item-name">{value.name}</h5>
                                            <div className="header__cart-item-price-wrap">
                                                <span className="header__cart-item-price">{value.price}</span>
                                                <span className="header__cart-item-multiply">x</span>
                                                <span className="header__cart-item-qnt">{value.quantityProduct}</span>
                                            </div>
                                        </div>

                                        <div className="header__cart-item-body">
                                            <span className="header__cart-item-remove" data-id={value.id} onClick={(e) => handleOnclick(e) }>Xóa</span>
                                        </div>
                                    </div>
                                </li>
                                )    })}
                            </ul>
                        
                            <a href="" className="btn btn--primary header__cart-veiw-cart">Xem Giỏ Hàng</a>
                        </div>
                </div>
                
            </div>
            
        );
    
}
export default Cart;