import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HeaderOneOfNew from './headerOneOfNew'

class RegisAndLogin extends React.Component {
    render () {
        return (
            
            <div className="header-account">
                <div className="header-account-text">
                    <span> Tài khoản</span>
                </div>
                <div className="header-account-box header-account-mobie-box">
                    <ul className="header-account-item">
                        <li className="header-account-list">
                            <Link to="/registration" className="header-account-link">Đăng Kí</Link>
                        </li>
                        <li className="header-account-list">
                            <Link to="/login" >Đăng Nhập</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default RegisAndLogin;