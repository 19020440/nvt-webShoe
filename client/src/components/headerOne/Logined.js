import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import HeaderOneOfNew from './headerOneOfNew'
import axios from 'axios'
function Logined(props) {
    let history = useHistory();
    const handleClick =() => {
        
        axios.get('http://localhost:3001/logout')
            .then((res) => {
                console.log(res.data)
            })
            history.push('/')
            window.location.reload();
            
    }
    
    return (
            
            <div className="header-account">
                <div className="header-account-text">
                    <span>
                        {props.username}
                        
                        </span>
                </div>
                <div className="header-account-box header-account-mobie-box">
                    <ul className="header-account-item">
                        <li className="header-account-list">
                            <Link to="#" className="header-account-link" onClick={handleClick}>Đăng xuất</Link>
                        </li>
                        <li className="header-account-list">
                            <Link to="#" >Thông tin cá nhân</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }

export default Logined;