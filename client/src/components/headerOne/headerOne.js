import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import HeaderOneOfNew from './headerOneOfNew'
import RegisAndLogin from './RegisAndLogin'
import Cart from './Cart'
import Logined from './Logined'
import axios from 'axios'
import Three from '../headerThree/Three'
import FindProduct from '../headerTwo/FindProduct';
import Logo from '../headerTwo/Logo';


function HeaderOne(props) {
    let history = useHistory();
    const [profile, setProfile] = useState(0);
    const [url, setUrl] = useState('');
        return (
            <nav className="nav">
                
                {/* MOBIE */}
                <div className="mobie">
                    <div className="nav-mobie-one">
                        <label for="nav-mobie-input" className="nav-mobie-category" >
                            <img src="https://img.icons8.com/ios/30/ffffff/search-in-list.png"/>
                        </label>
                        <input type="checkbox" id="nav-mobie-input" className="nav-input"></input>
                        <div className="nav-mobie">
                            <label className="icon-close" for="nav-mobie-input">
                                <img src="https://img.icons8.com/fluent/48/ffffff/multiply.png"/> 
                            </label>
                            <Three />   
                        </div>

                        <label for="nav-mobie-input2">
                            <img src="https://img.icons8.com/ios-filled/30/ffffff/search--v1.png" className="nav-search" />
                        </label>

                        <input type="checkbox" id="nav-mobie-input2" className="nav-input2"></input>
                        
                        <lable className="nav-search-product1" for="nav-mobie-input2">
                            <FindProduct />
                        </lable>
                        <label for="nav-mobie-input" className="nav-overlay"></label >
                    </div>

                    <div className="nav-mobie-two">
                        <Logo />
                    </div>

                    <div className="nav-mobie-three">
                        <Cart />
                        <label className="nav-mobie-three-boximg" for="nav-mobie-input3">
                            <img src="https://img.icons8.com/color/30/000000/menu-2.png"/>
                        </label>
                        
                        <input type="checkbox" id="nav-mobie-input3" className="nav-input3"></input>
                        <label for="nav-mobie-input3" className="nav-overlay1"></label >
                        
                        <div className="nav-mobie-threeprofile">
                            <label className="icon-close" for="nav-mobie-input3">
                                <img src="https://img.icons8.com/fluent/48/ffffff/multiply.png"/> 
                            </label>
                            <div className="nav-mobie-HeaderOneOfNew">
                                <HeaderOneOfNew />
                            </div>
                            
                            <div className="nav-mobie-CartAndAccount">
                                {props.profile.login == true && <Logined username={props.profile.username}/>}
                                {props.profile.login == false && <RegisAndLogin />}
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
                
                
                
                
                {/* PC */}
                <div className="PC">
                    <div className="HeaderOneOfNew">
                        <HeaderOneOfNew />
                    </div>
                    
                    <div className="CartAndAccount">
                        {props.profile.login == true && <Logined username={props.profile.username}/>}
                        {props.profile.login == false && <RegisAndLogin />}
                        { <Cart />}
                    </div>
               </div>
            </nav>

            
       
        );
    }

export default HeaderOne;