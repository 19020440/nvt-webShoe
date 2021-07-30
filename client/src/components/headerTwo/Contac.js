import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


class Contact extends React.Component {
    render () {
        return (
            <div className="header-two-contact">
                <div className="header-two-contact__img">
                    <img src="https://img.icons8.com/wired/20/000000/chat.png"/>
                </div>
                <div className="header-two-contact-notify">
                    <p>Tổng đài: 19020440</p>
                    <p>Hotline: 0982324600</p>
                </div>
            </div>
        );
    }
}
export default Contact;