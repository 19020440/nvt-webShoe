import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class HeaderOneOfNew extends React.Component {
    render () {
        return (
            
                <div className="header-new">
                    <Link className="nav-link" href="#">Tin tức</Link>
                    <span>|</span>
                    <Link className="nav-link" href="#">RSS</Link>
                    <span>|</span>
                    <Link className="nav-link disabled" href="#">Người bán kênh</Link>
                </div>
            
        );
    }
}
export default HeaderOneOfNew;