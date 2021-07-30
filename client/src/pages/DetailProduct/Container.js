
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {useDispatch} from 'react-redux'
import $ from 'jquery'




function Container() {
    var centerIMG ='';
    let { id } = useParams();
    const [detailShoe , setDetailShoe] = useState([]);
    const [picture, setPicture] = useState('')
    const dispatch = useDispatch();
    useEffect( () => {
       
        axios.get(`http://localhost:3001/shoes/${id}`)
            .then((res) => {
                setDetailShoe(res.data);
                 
            })
    },[]);
    
    const handleOnclick = () => {


        if(window.sessionStorage.getItem('Login') != null) {
            if(window.sessionStorage.getItem('Cart') != null) {
                var arr = detailShoe;
                arr[0].quantityProduct = 1;
                var shoe = JSON.parse(window.sessionStorage.getItem('Cart'));
                 var rss = shoe.findIndex(function(shoe){
                    return shoe.id === arr[0].id;
                })
                if(rss != -1) {
                    var a = shoe[rss].quantityProduct;
                    a ++;
                    // arr[0].quantityProduct = a;
                    shoe[rss].quantityProduct = a;
                    window.sessionStorage.setItem('Cart', JSON.stringify(shoe))
                    console.log('cai nay guong ne')
                } else {
                    window.sessionStorage.removeItem('Cart');
                    shoe =  shoe.concat(arr)
                    window.sessionStorage.setItem('Cart', JSON.stringify(shoe) )
                }
               
            } else {
                var arr = detailShoe;
                arr[0].quantityProduct = 1;
                window.sessionStorage.setItem('Cart', JSON.stringify(arr))
            }
            // window.sessionStorage.setItem('Cart',JSON.stringify(detailShoe))
            
            // window.sessionStorage.removeItem('Cart')
            console.log(window.sessionStorage.getItem('Cart'))
        } else {
            axios.post('http://localhost:3001/addCart',{productId: id})
                .then((res) => {
                    // if(res.data.addProduct) {
                        
                    // //    document.querySelector('.notify-success').style.display = 'block';
                    // const a = setTimeout(()=> {
                    //     document.querySelector('.notify-success').style.display = 'block';
                    // },500)
                    // const b = setTimeout(()=> {
                    //     document.querySelector('.notify-success').style.display = 'none';
                    // },2000)
                    // }
                })
            }
                setTimeout(function() {
                    dispatch({type: "ADDTOCART"})
                }, 1000)
                
            
    }

   const handleMouseOver = (e) => {
       
        var IMG = e.target.parentElement.parentElement.previousElementSibling.firstChild;
        centerIMG = IMG.getAttribute('src')
        
        var SRC = e.target.getAttribute('src')
       IMG.setAttribute('src', SRC)
       e.target.nextElementSibling.setAttribute('class', 'detail-product-picture-many-img-background')
   }
//    var valid = true;
//    const handleMouseOut = (e,string) => {
//     var IMG = e.target.parentElement.parentElement.previousElementSibling.firstChild;
//     if(valid)    IMG.setAttribute('src', string)
//     else return;
// }

    // const handleOnclickIMG = (e, string) => {
    //     valid = false;
    //     var IMG = e.target.parentElement.parentElement.previousElementSibling.firstChild;
    //     var i1 = string;
    //     var i2 = e.target.getAttribute('src');
    //     console.log(IMG);
    //     IMG.setAttribute('src', i2);
    //     e.target.setAttribute('src', i1)
    // }
   
    const handleLoad = (e) => {
        if(centerIMG != '') {
            
            var rs = $(`img[src='${centerIMG}']`).next();
            // var rs = e.target.parentElement.nextElementSibling.querySelector(`[src='${centerIMG}']`).nextElementSibling
            // console.log(rs.prop)
            rs.removeAttr('class')  
        } else return;
    }
  return (
        <div className="detail-product-bigBox">
            <div className="detail-product">
                 {detailShoe.map((value,key) => {
                     function toString (a) {
                        return `/${a}`;  
                        }
                     return (
                <div className="detail-product-picture">
                    
                    <div className="detail-product-picture-big">
                        <img src={toString(value.image)} 
                        onLoad={(e) =>handleLoad(e)}
                        ></img>
                    </div>
                    <div className="detail-product-picture-many">
                        <div className="detail-product-picture-many-img">
                            <img src='/img/001.jpg'
                            onMouseOver={(e) => handleMouseOver(e)}
                            // onMouseOut={(e) => handleMouseOut(e, toString(value.image))}
                            ></img>
                            <div></div>
                        </div>

                        <div className="detail-product-picture-many-img">
                            <img src={toString(value.image)}
                            onMouseOver={(e) => handleMouseOver(e)}
                            // onMouseOut={(e) => handleMouseOut(e, toString(value.image))}
                            ></img>
                            <div className="detail-product-picture-many-img-background"></div>
                        </div>
                        
                        <div className="detail-product-picture-many-img">
                        <img src='/img/002.jpg'
                            onMouseOver={(e) => handleMouseOver(e)}
                            // onMouseOut={(e) => handleMouseOut(e, toString(value.image))}
                            // onClick={(e) => handleOnclickIMG(e, toString(value.image))}
                            ></img>
                            <div></div> 
                        </div>
                    </div>
                </div>
                     )})}

                {detailShoe.map((value,key) => {
                                    return (
                <div className="detail-product-information">
                    <div className="detail-product-information-name">
                        
                        <span>{value.name}</span>
                        
                    </div>

                    <div className="detail-product-information-orther">
                        <p>Hãng: 
                            <span>{value.type}</span>
                        
                        </p>
                        <p>Kiểu dáng: 
                            <span>Giày thể thao</span>
                        
                        </p>
                        <p>Giới tính: 
                            <span>Unisex</span>
                        
                        </p>
                        <p>Hãng: 
                            <span>{value.type}</span>
                        
                        </p>

                        
                        <div className="detail-product-information-orther-btn">
                            <ul className="detail-product-information-orther-item">
                                <li className="detail-product-information-orther-list">
                                    <span onClick={handleOnclick}>Thêm vào giỏ</span>
                                </li>

                                <li className="detail-product-information-orther-list">
                                    <a>Mua ngay</a>
                                </li>

                            </ul>
                        </div>
                    </div>

                </div>
                                    )})}
            </div>

            <div className="notify-success">
                    <p>bạn thêm sản phẩm thành công</p>
            </div>
            </div>
        
    
    );

  }
export default Container;