import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class Logo extends React.Component {
    render () {
        return (
            <a>
                <img src="https://img.icons8.com/nolan/100/dauntless.png" className="logo"/>
            </a>
        );
    }
}
export default Logo;