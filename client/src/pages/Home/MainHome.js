
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home2 from './Home2'
import HomeP1 from './HomeP1'
import Home from './Home'

class Two extends React.Component {
    render () {
        console.log(document.cookie.length)
        return (
            // <div className="app__container">
                <div className="grid wide">
                    <div className="row">
                        
                        <Home2 />
                        <div className="col l-10 m-12 c-12">
                            <div className="row">
                                <div className="col l-12 m-12 c-12">
                                    <HomeP1 />
                                </div>
                            </div>
                                <Home />
                            
                        </div>
                    </div>
                </div>
            // </div>
        );
    }
}
export default Two;









