
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Contact from './Contac';
import Logo from './Logo'
import FindProduct from './FindProduct';

class Two extends React.Component {
    render () {
        return (
            <div className="header-two">
                <Contact />
                <Logo />
                <FindProduct />
            </div>
        );
    }
}
export default Two;









