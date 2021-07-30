
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {connect} from 'react-redux'



 class  Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchs: {
                searchList: 0,
                
            }
        }
    }
   

    componentWillMount() {
        console.log('state thay thoi thi')
    }
    render() {
        var rs;
        // if(this.props.data2.productText == this.props.data.searchText) 
        rs = {searchList: this.props.data2.searchList} 
        
        // else 
        // rs = {searchList:  this.props.data.searchList}
        console.log(rs)
        return (
            <div className="home_product"> 
            <div className="row">

                {rs.searchList.map((value,key) => {

                    function toString () {
                        return `/shoes/${value.id}`;  
                        }
                    return (
                        
                    <div className="col l-2-4"
                     
                     key={key}
                     >
                            <div className="home-product-item__img">
                                <Link to={toString()}>
                                    <img src={value.image} className="img"></img>
                                </Link>
                                
                                <h5 className="home-product-item__name">{value.name}</h5>
                                   
                            </div>

                            <div className="home-product-item__origin">
                                {/* <span className="home-product-item__brand">{this.props.location}</span> */}
                                <div className="home-product-item__price">
                                        <span className="home-product-item__price-old">{value.price}.đ</span>
                                </div>
                                <span className="home-product-item__origin-name">{value.type}</span>

                                
                            </div>
                    </div>
                
                        
                    
                

                    );
                   
                })
                
                } 
            </div>
        </div>
        
        )
        
        
                }
    }
    
     const mapStateToProps = (state, ownProps) => {
         return {
             data: state.search,
             data2: state.sortSerch,
         }
     }

     const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            addDataStores: (searchrsort) => {
                dispatch({type: "SORTSEARCH", searchrsort})
            }
        }
    }
 
 export default connect(mapStateToProps,mapDispatchToProps)(Search);