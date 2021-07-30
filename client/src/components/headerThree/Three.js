
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class Three extends React.Component {
    render () {
        return (
            <div className="header-three">
                <ul className="header-three-item">
                    <li className="header-three-list">
                        <Link to="/login" className="header-three-link"> THƯƠNG HIỆU</Link>
                    </li>
                    <li className="header-three-list">
                        <Link to="" className="header-three-link">ĐỒNG HỒ</Link>
                    </li>
                    <li className="header-three-list">
                        <Link to="" className="header-three-link">NƯỚC HOA</Link>
                    </li>
                    <li className="header-three-list">
                        <Link to="" className="header-three-link">KÍNH</Link>
                    </li>
                    <li className="header-three-list">
                        <Link to="/giay" className="header-three-link">GIÀY</Link>
                    </li>
                    <li className="header-three-list">
                        <Link to="" className="header-three-link">TÚI XÁCH</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
export default Three;









