
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux'
import { withRouter } from "react-router";




 function NewProduct(props) {
    let history = useHistory();
    const [newProduct, setNewProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/newProduct')
            .then((res) => {
                setNewProduct(res.data)
            })
    },[])

    const toStringMoney = (money) => {
        var x = money.toString();
        var b = Math.floor(x.length/3);
        var c = x.length % 3;
        var d = '';
        for(var i=0 ; i< b ;++i) {
        d +='.' + x.slice(c,c+3);
        c=c+3;
        }
        d= x.slice(0,c-3*b).concat(d)
        if(d[0] === '.' ) d=d.slice(1,d.length)
        d=d+"đ";
        return d;
    }

    return (

        <div className="container mt-3">
        <div className="newproduct-text">
            <h1>TOP SẢN PHẨM MỚI NHẤT</h1>
        </div>
        <div className="row">
            {newProduct.map((value, key) => {
                return (
                    <div className="col-lg-3 col-md-6 offset-md-0 offset-sm-1 col-sm-10 offset-sm-1  my-2" onClick={() => {history.push(`/shoes/${value.id}`)}}>
                        <div className="card"> <img className="card-img-top card-img-top2" src={value.image}></img>
                            <div className="card-body">
                                <div className="d-flex align-items-start justify-content-between">
                                    <div className="d-flex flex-column">
                                        <div className="h6 font-weight-bold">{value.name}</div>
                                        <div className="text-muted">{toStringMoney(value.price)}</div>
                                    </div>
                                    <div className="btn aothatday"><span >{value.type}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            

        </div>
    
    </div>
    )

    
 }
 const ShowTheLocationWithRouter = withRouter(NewProduct);
 export default ShowTheLocationWithRouter;
















// https://giayxshop.vn/wp-content/uploads/2021/04/4183956-scaled.jpg