
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux'
import { withRouter } from "react-router";



 function Catalog(props) {
    let history = useHistory();
    // var rs = document.querySelectorAll('.icon--icon');
    // var rs2 = [true, true, true];
    // var j;
    
    // // console.log(rs[0].parentElement.nextElementSibling)
    // for(var i=0; i< rs.length; ++i) {
     
    //   rs[i].onclick = function(e) {
    //     if(e.target == rs[0]) j=0;
    //     else if(e.target == rs[1]) j=1;
    //     else j=2;
    //     // console.log(e.target)
    //     if(rs2[j] == true ) {
    //       e.target.parentElement.nextElementSibling.style.display = "block";
    //       e.target.parentElement.transition = `3s ease-in`
    //       rs2[j] = false;
    //     } 
    //     else {
    //       e.target.parentElement.nextElementSibling.style.display = "none";
    //       rs2[j] = true;
    //     }
    
    //   }
    // }

    const handleOnclick = (e) => {
        e.preventDefault();
        if(e.target.parentElement.nextElementSibling.style.display == 'none') {
            e.target.parentElement.nextElementSibling.style.display = "block"
            console.log(e.target.parentElement.nextElementSibling.style.display)
        } else {
            e.target.parentElement.nextElementSibling.style.display = "none";
        }
    }

    const handleOnclick2 = (e) => {
        e.preventDefault();
        history.push(`/giay?brand=${e.target.innerText}`)
        console.log(e.target.innerText);
    }


    return (
        <div className="test2">
                     <ul className="category-list">
                        <li className="category-item category-item--active">
                            <a href="" className="category-item__link" onClick={(e) => handleOnclick(e)}>Thương hiệu</a>
                            <img src="https://img.icons8.com/fluent/14/000000/sort-down.png" className="icon--icon" onClick={(e) => handleOnclick(e)}/>
                        </li>

                        <div className="test">
                            <li className="category-item">
                               
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>Converse</a>
                            </li>
        
                            <li className="category-item">
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>Reebok</a>
                            </li>
        
                            <li className="category-item">
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>NIKE</a>
                            </li>

                            <li className="category-item">
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>BITIS</a>
                            </li>

                            <li className="category-item">
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>PUMA</a>
                            </li>

                            <li className="category-item">
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>VANS</a>
                            </li>

                            <li className="category-item">
                                <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick2(e)}>ADIDAS</a>
                            </li>
                        </div>
                    </ul>

                    <div className="test1">
                        <ul className="category-list">

                            <li className="category-item category-item--active">
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick(e)}>Xuất sứ</a>
                                <img src="https://img.icons8.com/fluent/14/000000/sort-down.png" className="icon--icon" onClick={(e) => handleOnclick(e)}/>
                            </li>
                            <div className="test">
                                <li className="category-item ">
                                    <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                    <a href="" className="category-item__link">Việt Nam</a>
                                </li>
            
                                <li className="category-item">
                                    <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                    <a href="" className="category-item__link">Nhật Bản</a>
                                </li>
            
                                <li className="category-item">
                                    <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                    <a href="" className="category-item__link">Canada</a>
                                </li>
                            </div>
            
                         </ul>

                         <div className="test2-2">
                         <ul className="category-list">

                            <li className="category-item category-item--active">
                                <a href="" className="category-item__link" onClick={(e) => handleOnclick(e)}>Size</a>
                                <img src="https://img.icons8.com/fluent/14/000000/sort-down.png" className="icon--icon" onClick={(e) => handleOnclick(e)}/>
                            </li>
                            <div className="test">
                                <li className="category-item ">
                                    <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                    <a href="" className="category-item__link">Size 36</a>
                                </li>

                                <li className="category-item">
                                    <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                    <a href="" className="category-item__link">Size 37</a>
                                </li>

                                <li className="category-item">
                                    <img src="https://img.icons8.com/material/7/000000/right3--v1.png"/>
                                    <a href="" className="category-item__link">Size 38</a>
                                </li>
                            </div>

                        </ul>
                         </div>
                    </div>
                </div>

    )
 }

export default Catalog;









