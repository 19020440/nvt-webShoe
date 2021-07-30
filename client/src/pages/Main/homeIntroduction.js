
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux'
import { withRouter } from "react-router";
import NewProduct from './NewProduct'


 function HomeIntroduction() {
    








    return (
        <div className="grid wide">
            <div className="introduction-photogarph row">
                <div className="col c-12 m-12 l-12">
                    <img className="introduction-photogarph-img" src="https://giayxshop.vn/wp-content/uploads/2021/04/4183956-scaled.jpg"></img>
                </div>
                
                
                
                <div className="introduction-photogarph-box col l-12 c-12 m-12">
                    <div className="row">
                        <div className="introduction-photogarph-text col l-3 m-6 c-12">
                                <img src="https://giayxshop.vn/wp-content/uploads/2019/11/iconfinder_truck_1291768-1.png" className="introduction-photogarph-text-img"></img>
                                <p>GIAO HÀNG TOÀN QUỐC</p>
                                <p>Vận chuyển khắp Việt Nam</p>  
                            </div>

                            <div className="introduction-photogarph-text col l-3 m-6 c-12">
                                <img src="https://giayxshop.vn/wp-content/uploads/2019/11/iconfinder_payment_1954199-3.png" className="introduction-photogarph-text-img"></img>
                                <p>THANH TOÁN KHI NHẬN HÀNG</p>
                                <p>Nhận hàng tại nhà rồi thanh toán</p>  
                            </div>

                            <div className="introduction-photogarph-text col l-3 m-6 c-12">
                                <img src="https://giayxshop.vn/wp-content/uploads/2019/11/iconfinder_service_repair_phone_mobile_wrench_screw_driver_4014703-1.png" className="introduction-photogarph-text-img"></img>
                                <p>BẢO HÀNH DÀI HẠN</p>
                                <p>Bảo hành lên đến 60 ngày</p>  
                            </div>

                            <div className="introduction-photogarph-text col l-3 m-6 c-12">
                                <img src="https://giayxshop.vn/wp-content/uploads/2019/11/iconfinder_refresh_3017918-1.png" className="introduction-photogarph-text-img"></img>
                                <p>ĐỔI HÀNG DỄ DÀNG</p>
                                <p>Đổi hàng thoải mái trong 30 ngày</p>  
                            </div>
                    </div>
                       
                </div>
            </div>
        <NewProduct />
        </div>
    )
 }
 const ShowTheLocationWithRouter = withRouter(HomeIntroduction);
 export default ShowTheLocationWithRouter;
















// 