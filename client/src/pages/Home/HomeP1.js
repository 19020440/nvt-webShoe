

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from "react-router";


function HomeP1(props) {

    const [sort,setSort] = useState('Mặc định');

    useEffect(() => {
        const paramsquery = window.location.search;
        const params = new URLSearchParams(paramsquery);
         const foo = params.get('sort')
         
         console.log('dieu anh luon giu kin trong tim ');
         if(foo != null) {
             if(foo == 'asc')                
                setSort('Giá từ thấp tới cao')
             else 
                setSort('Giá từ cao đến thấp')
        } else setSort('Mặc định')
        // console.log(window.location.search);
    },[window.location.search])
    const history = useHistory();

    const handleClick = (e) => {
                if(e.target.innerText == sort) return;
                const paramsquery = window.location.search;
                const params = new URLSearchParams(paramsquery);
                 const foo2 = params.get('brand');
                 var url;
                if(foo2 != null) url = `brand=${foo2}`
                else url='';
                
                e.preventDefault();
                // this.props.history.push('')
                var typeSort = e.target.getAttribute('id');
                switch(typeSort) {
                    case 'default' : {
                        var rs = url != '' ? `?${url}`:''
                        history.push(`/giay${rs}`)
                        break;
                    }
        
                    case 'desc' : {
                        var rs = url != '' ? `&${url}`:''
                        history.push(`/giay?sort=desc${rs}`)
                        break;
                    }
        
                    case 'asc' : {
                        var rs = url != '' ? `&${url}`:''
                        history.push(`/giay?sort=asc${rs}`)
                        break;
                    }
                }
                
                    setSort(e.target.innerText)
                    // typeSort: e.target.attributes.getNamedItem('id').value,
                    
                
    }


    return (
        <div className="home-filter">
            <div className="home-filter-textType">
                <span>Giày dép</span>
            </div>
            <div className="home-filter-activeSort">
                <div className="home-filter__lable">
                    Sắp xếp theo: 
                    <b>{sort}</b>
                    <div className="home-filter-activeSort-hover">
                        <ul className="home-filter-activeSort-hover-item">
                            <li className="home-filter-activeSort-hover-list">
                                {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="default">Mặc định</p> */}
                                <Link  className="home-filter-activeSort-text" onClick={(e)=>handleClick(e)} id="default">Mặc định</Link>
                            </li>
                            <li className="home-filter-activeSort-hover-list">  
                                {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="desc">Giá từ cao đến thấp </p> */}
                                <Link className="home-filter-activeSort-text" onClick={(e)=>handleClick(e)} id="desc">Giá từ cao đến thấp </Link>
                            </li>
                            <li className="home-filter-activeSort-hover-list"> 
                                {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="asc">Giá từ thấp tới cao</p> */}
                                <Link className="home-filter-activeSort-text" onClick={(e)=>handleClick(e)} id="asc">Giá từ thấp tới cao</Link>
                            </li>
                            <li className="home-filter-activeSort-hover-list">
                                {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="newest">Mới nhất</p> */}
                                <Link className="home-filter-activeSort-text"onClick={(e)=>handleClick(e)}>Mới nhất</Link>
                            </li>
                            <li className="home-filter-activeSort-hover-list"> 
                                {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="much">Sản phẩm mua nhiều nhất</p> */}
                                <Link className="home-filter-activeSort-text" onClick={(e)=>handleClick(e)}>Sản phẩm mua nhiều nhất</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>

        </div>
    );

}
export default
//  connect(null,mapDispatchToProps)
withRouter(HomeP1);



















