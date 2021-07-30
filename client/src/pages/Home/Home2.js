
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Catalog from './Catalog'

class Home2 extends React.Component {
    render () {
        return (
            <div className="col l-2 m-0 c-0">
                <nav className="category">
                    <h3 className="category__heading"> <img src="https://img.icons8.com/doodle/30/000000/address-book.png"/> Danh mục</h3>
                    <Catalog />
                </nav>
            </div>
        );
    }
}
export default Home2;












