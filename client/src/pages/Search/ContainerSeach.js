
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home2 from '../Home/Home2';
import HomeP1Search from '../Home/HomeP1Search';
import Search from './search'

class ContainerSearch extends React.Component {
    render () {
        return (
            <div className="app__container">
                <div className="grid wide">
                    <div className="row app__contet">
                        <Home2 />
                        <div className="col l-10">
                            <HomeP1Search />
                            <Search />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ContainerSearch;









