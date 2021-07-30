
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux'
import { withRouter } from "react-router";



 function Home() {
    const [listOfShoes,setListOfShoes] = useState([]);
    
    let history = useHistory();
    // var sortTypes = useSelector(state => state.sort)
   
    
    useEffect( () => {
        const paramsquerys = window.location.search;
        const paramss = new URLSearchParams(paramsquerys);
         const foos = paramss.get('sort')
         const foo2 = paramss.get('brand')
        console.log(foos)
        if(foo2 == null) {
            if(foos != null) {
                axios.get(`http://localhost:3001/giay?sort=${foos}`)
                .then((res) => {
                    setListOfShoes(res.data);
                })
            } else {
                axios.get('http://localhost:3001/giay')
                .then((res) => {
                    setListOfShoes(res.data);
                })
            }
        } else {
            if(foos != null) {
                axios.get(`http://localhost:3001/giay?sort=${foos}&brand=${foo2}`)
                .then((res) => {
                    setListOfShoes(res.data);
                })
            } else {
                axios.get(`http://localhost:3001/giay?brand=${foo2}`)
                .then((res) => {
                    setListOfShoes(res.data);
                })
            }
        }
        // }
        // else {
            // var toStrings;
            // if(sortTypes.typeSort != 'default') {
            //     toStrings = `?sort=${sortTypes.typeSort}`
            //     history.push(toStrings);
            //     const paramsquery = window.location.search;
            //     const params = new URLSearchParams(paramsquery);
            //     // console.log(paramsquery)
            //     console.log(window.location.href)
            //     const foo = params.get('sort');
            //     console.log(foo)
            //     axios.get(`http://localhost:3001/giay?sort=${foo}`)
            //     .then((res) => {
            //         setListOfShoes(res.data);

            //     })
            // } else {
            //     // const paramsquerys = window.location.search;
            //     // const paramss = new URLSearchParams(paramsquerys);
            //     // const foos = paramss.get('sort')
                
            //     history.push('/giay')
            //     console.log(window.location.href)
            //     axios.get('http://localhost:3001/giay')
            //         .then((res) => {
            //             setListOfShoes(res.data);

            //         })
            //         console.log('1')
            // }
        // }
        
        document.querySelector('.header-cart').style.display = 'block';
        
   
    },[window.location.search]);

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
        // <div className="home_product"> 
            <div className="row space-top">

                {listOfShoes.map((value,key) => {

                    function toString () {
                        return `/shoes/${value.id}`;  
                    }
                    return (
                        
                    <div className="col l-2-4 m-4 c-12 home-product"
                     onClick={() => {history.push(`/shoes/${value.id}`)}}
                     key={key}
                     >
                            <div className="home-product-item__img">
                                {/* <Link to={toString()}> */}
                                    <img src={value.image} className="img"></img>
                                {/* </Link> */}
                                
                                <h5 className="home-product-item__name">{value.name}</h5>
                                    
                            </div>

                            <div className="home-product-item__origin">
                                {/* <span className="home-product-item__brand">{toString}</span> */}
                                <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">{toStringMoney(value.price)}</span>
                                </div>
                                <span className="home-product-item__origin-name">{value.type}</span>
                            </div>
                    </div>
                    );
                })
                } 
            </div>
        // </div>
     )
 }
 const ShowTheLocationWithRouter = withRouter(Home);
 export default ShowTheLocationWithRouter;