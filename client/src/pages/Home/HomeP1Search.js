

import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import axios from 'axios'
import {connect} from 'react-redux'
import { withRouter } from "react-router";
import {useDispatch, useSelector} from 'react-redux' 
function HomeP1Search (props) {
    let history = useHistory();
    const [sort,setSort] = useState('Mac dinh');
    const [sortType,setSortType] = useState('default');
    const states = useSelector(state => state.search)
    const dispatch = useDispatch();
    var sorts = 'Mặc định'
    if(sorts != '') {
        const paramsquery = window.location.search;
        const params = new URLSearchParams(paramsquery);
        const foo = params.get('sort');
        if(foo != null) {
            if(foo == 'asc')
            sorts = 'Giá từ thấp tới cao';
           else sorts= 'Giá từ cao tới thấp'
       }
        
    }

    useEffect ( () => {
        const paramsquery = window.location.search;
        const params = new URLSearchParams(paramsquery);
        const foo = params.get('product')
         const foos = params.get('sort')
         if(foos == null) {
            axios.get(`http://localhost:3001/search?product=${foo}`)
            .then((res) => {
                // setListOfShoes(res.data);
                dispatch({type:"SORTSEARCH", searchrsort: {
                                    searchList: res.data,
                                    sortType: '',
                                    productText: foo,
                                }})
            })
        } else {
            axios.get(`http://localhost:3001/search?product=${foo}&sort=${foos}`)
            .then((res) => {
                // setListOfShoes(res.data);
                dispatch({type:"SORTSEARCH", searchrsort: {
                    searchList: res.data,
                    sortType: '',
                    productText: foo,
                }})
            })
        }
        
    },[window.location.search])



    const handleClick = (e) => {
        e.preventDefault();
        if(e.target.innerText == sort) return;
        // setState({
        //     sort: e.target.innerText,
        //     typeSort: e.target.attributes.getNamedItem('id').value,
            
        // })
        sorts = e.target.innerText
        setSortType(e.target.attributes.getNamedItem('id').value)
        console.log(states.searchText)
        if(states.searchText == '') {
            const paramsquery = window.location.search;
            const params = new URLSearchParams(paramsquery);
            const foo = params.get('product') 
            console.log(foo)
            states.searchText = foo;
        }

        if(e.target.attributes.getNamedItem('id').value === "default") {
            history.push( `/search?product=${states.searchText}`)
            e.target.setAttribute('href', `/search?product=${states.searchText}`)
            
        } else {
            history.push(`/search?product=${states.searchText}&sort=${e.target.attributes.getNamedItem('id').value}`)
            e.target.setAttribute('href', `/search?product=${states.searchText}&sort=${e.target.attributes.getNamedItem('id').value}`)
            
        }
        // this.toString(e.target.attributes.getNamedItem('id').value);
    // console.log(e.target.innerText)
    // console.log(e.target.attributes.getNamedItem('id').value)

    
    //     const paramsquery = window.location.search;
    //     const params = new URLSearchParams(paramsquery);
    //     const foo2 = params.get('product')
    //     if(e.target.attributes.getNamedItem('id').value != 'default')  this.props.history.push(`/search?product=${foo2}&sort=${e.target.attributes.getNamedItem('id').value}`)
    //     else this.props.history.push(`/search?product=${foo2}`)
    //     const paramsquerys = window.location.search;
    //     const paramss = new URLSearchParams(paramsquerys);
    //     const foo = paramss.get('sort')
    //     // console.log(foo);
    //     if(foo == null){
    //         axios.get(`http://localhost:3001/search?product=${foo2}`)
    //         .then((res) => {
    //             var rs = {
    //                 searchList: res.data,
    //                 sortType: '',
    //                 productText: foo2,
    //             }
    //             this.props.addDataStores(rs)
    //             // console.log(res.data)
    //         })
    //     }else {

    //     axios.get(`http://localhost:3001/search?product=${foo2}&sort=${foo}`)
    //                 .then((res) => {
    //                     var rs = {
    //                         searchList: res.data,
    //                         sortType: foo,
    //                         productText: foo2,
    //                     }
    //                     this.props.addDataStores(rs)
    //                     // console.log(res.data)
    //                 })
    //     }
       
    }
    // toString = (a) => {
    //     if(a === 'default') return `/search?product=${this.props.data.searchText}`;
    //     return `/search?product=${this.props.data.searchText}&sort=${a}`
    // }
    
        return (
            <div className="home-filter">
                <div className="home-filter-textType">
                    <span>Giày dép</span>
                </div>
                <div className="home-filter-activeSort">
                    <div className="home-filter__lable">
                        Sắp xếp theo: 
                        <b>{sorts}</b>
                        <div className="home-filter-activeSort-hover">
                        <ul className="home-filter-activeSort-hover-item">
                                <li className="home-filter-activeSort-hover-list">
                                    {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="default">Mặc định</p> */}
                                    <Link 
                                    // to={() => this.toString()} 
                                    className="home-filter-activeSort-text"  onClick={handleClick} id="default" >Mặc định</Link>
                                </li>
                                <li className="home-filter-activeSort-hover-list">  
                                    {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="desc">Giá từ cao đến thấp </p> */}
                                    <Link 
                                    // to={() => this.toString()} 
                                    className="home-filter-activeSort-text"  onClick={handleClick} id="desc">Giá từ cao đến thấp </Link>
                                </li>
                                <li className="home-filter-activeSort-hover-list"> 
                                    {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="asc">Giá từ thấp tới cao</p> */}
                                    <Link 
                                    // to={() => this.toString()}  
                                    className="home-filter-activeSort-text"  onClick={handleClick} id="asc">Giá từ thấp tới cao</Link>
                                </li>
                                <li className="home-filter-activeSort-hover-list">
                                    {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="newest">Mới nhất</p> */}
                                    <Link className="home-filter-activeSort-text" className="home-filter-activeSort-text"  onClick={handleClick} id="default">Mới nhất</Link>
                                </li>
                                <li className="home-filter-activeSort-hover-list"> 
                                    {/* <p className="home-filter-activeSort-text" onClick={this.handleClick} id="much">Sản phẩm mua nhiều nhất</p> */}
                                    <Link className="home-filter-activeSort-text" className="home-filter-activeSort-text"  onClick={handleClick} id="default">Sản phẩm mua nhiều nhất</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                {/* <button className="home-filter__btn btn">Phổ biến</button>
                <button className="home-filter__btn btn  btn--primary">Mới nhất</button>
                <button className="home-filter__btn btn">Bán chạy</button> */}
            </div>
        );
    
}


// const mapStateToProps = (state, ownProps) => {
//     return {
//         data: state.search,
//     }
// }


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         addDataStores: (searchrsort) => {
//             dispatch({type: "SORTSEARCH", searchrsort})
//         }
//     }
// }
const ShowTheLocationWithRouter = withRouter(HomeP1Search);
export default
//  connect(mapStateToProps,null)
 (ShowTheLocationWithRouter);



















