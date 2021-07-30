import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import axios from 'axios'
import $ from 'jquery'
import {shallowEqual, useDispatch} from 'react-redux'
// class Cart extends React.Component {
//     constructor(props ) {
//         super(props);
//         this.state = {
//             result: [],
//             total: 0,
//         };
//     }
//     componentWillMount() {
//         axios.get('http://localhost:3001/shopCart')
//             .then((res) => {
//                 var rss = 0;
//                 res.data.map((value) => {
//                     rss += value.quantityProduct*value.price;
//                 })
//                 this.setState({result: res.data, total: rss,})
               
//             })
            
//     }

    
//     handleOnblur = (e, price) => {
//         // console.log(e.target.getAttribute('placeholder'))
//         var total = this.state.total - e.target.getAttribute('placeholder')*price;
//         e.target.parentElement.nextElementSibling.firstElementChild.innerText = e.target.value * price;
//         total +=  e.target.value * price;
//         e.target.setAttribute('placeholder', e.target.value)
//         this.setState({total: total})

//         axios.post('http://localhost:3001/changeCart', {productId: e.target.getAttribute('id'), quantityProduct: e.target.value})
//     }

//     handleOnclick = (e, price) => {
//         var Input = e.target.parentElement.parentElement.parentElement.querySelector('.td4-btn');
//        var IdOfProduct = Input.getAttribute('id');
//        var total = this.state.total;
//     //    console.log(Input.getAttribute('placeholder'))
//        axios.post('http://localhost:3001/removeCart', { productId: IdOfProduct })
//         total -= price *Input.getAttribute('placeholder');
//         this.setState({total: total})
        
//     }

//     render(){

//         return (
//             <div className="container">
//             <div className="wrapper wrapper-content animated fadeInRight">
//                 <div className="row">
//                     <div className="col-md-9">
//                         <div className="ibox">
//                             <div className="ibox-title">
//                                 <span className="pull-right">(<strong>{this.state.result.length}</strong>) items</span>
//                                 <h5>Items in your cart</h5>
//                             </div>
//                            {this.state.result.map((value, key) => {
//                                return (
                           
//                             <div className="ibox-content" key={key}>
//                                 <div className="table-responsive" >
                                    
//                                             <div className="td1">
//                                                 <div className="cart-product-imitation">
//                                                     <img src={value.image}></img>
//                                                 </div>
//                                             </div>

//                                             <div className="desc td2">
//                                                 <h3>
//                                                     <a href="#" className="text-navy">
//                                                         {value.type}
//                                                     </a>
//                                                 </h3>
//                                                 <p className="small">
//                                                     {value.name} 
//                                                 </p>
//                                                 <dl className="small m-b-none">
//                                                     <dt>Description lists</dt>
//                                                     <dd>A description list is perfect for defining terms.</dd>
//                                                 </dl>
//                                                 <div className="m-t-sm">
//                                                     <p  className="text-muted" onClick ={(e) => this.handleOnclick(e, value.price)}><i className="fa fa-trash"></i> Remove item</p>
//                                                 </div>
//                                             </div>

//                                             <div className="td3" >
//                                                 {value.price}
//                                             </div>

//                                             <div className="td4">
//                                                 {/* <input type="text" className="form-control" placeholder="1"></input> */}
//                                                 <input autocomplete="off" 
//                                                 className="td4-btn" 
//                                                 type="text" 
//                                                 id={value.id}
//                                                 placeholder={value.quantityProduct}
//                                                  onBlur={(e) => this.handleOnblur(e, value.price)}></input>
//                                             </div>

//                                             <div className="td5">
//                                                 <h4 className="caculateProduct">
//                                                     {value.price*value.quantityProduct}
//                                                 </h4>
//                                             </div>
                                       
//                                 </div>
//                             </div>
//                                )
//                             })}
//                             <div className="ibox-content">
//                                 <button className="btn btn-primary pull-right"><i className="fa fa fa-shopping-cart"></i> Checkout</button>
//                                 <button className="btn btn-white"><i className="fa fa-arrow-left"></i> <Link to="/giay">Continue shopping</Link></button>
            
//                             </div>
//                         </div>
            
//                     </div>
//                     <div className="col-md-3">
//                         <div className="ibox">
//                             <div className="ibox-title">
//                                 <h5>Cart Summary</h5>
//                             </div>
//                             <div className="ibox-content">
//                                 <span>
//                                     Total
//                                 </span>
//                                 <h2 className="font-bold">
//                                     {this.state.total}
//                                 </h2>
            
//                                 <hr></hr>
//                                 <span className="text-muted small">
//                                     *For United States, France and Germany applicable sales tax will be applied
//                                 </span>
//                                 <div className="m-t-sm">
//                                     <div className="btn-group">
//                                     <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"></i> Checkout</a>
//                                     <a href="#" className="btn btn-white btn-sm"> Cancel</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
            
//                         <div className="ibox">
//                             <div className="ibox-title">
//                                 <h5>Support</h5>
//                             </div>
//                             <div className="ibox-content text-center">
//                                 <h3><i className="fa fa-phone"></i> +43 100 783 001</h3>
//                                 <span className="small">
//                                     Please contact with us if you have any questions. We are avalible 24h.
//                                 </span>
//                             </div>
//                         </div>
            
//                         <div className="ibox">
//                             <div className="ibox-content">
            
//                                 <p className="font-bold">
//                                 Other products you may be interested
//                                 </p>
//                                 <hr></hr>
//                                 <div>
//                                     <a href="#" className="product-name"> Product 1</a>
//                                     <div className="small m-t-xs">
//                                         Many desktop publishing packages and web page editors now.
//                                     </div>
//                                     <div className="m-t text-righ">
            
//                                         <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
//                                     </div>
//                                 </div>
//                                 <hr></hr>
//                                 <div>
//                                     <a href="#" className="product-name"> Product 2</a>
//                                     <div className="small m-t-xs">
//                                         Many desktop publishing packages and web page editors now.
//                                     </div>
//                                     <div className="m-t text-righ">
            
//                                         <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         )
//         }
// }




function Cart(props){
    const [result, setResult] = useState([]);
    const [totals, setTotals] = useState('');
    const [checkProduct, setCheckProdduct] = useState([])
    const dispatch = useDispatch();
    let history = useHistory();
    
    useEffect(() => {
        // console.log(window.location.pathname);
        document.querySelector('.header-cart-text').style.display = 'none';
        if(window.sessionStorage.getItem('Cart') != null) {
            var arr = JSON.parse(window.sessionStorage.getItem('Cart'));
            setResult(arr)
            var rss = 0;
            arr.map((value) => {
                rss += value.quantityProduct*value.price;
            })
           
            setTotals( toStringMoney(rss))
        } else {
            axios.get('http://localhost:3001/shopCart')
                .then((res) => {
                    var rss = 0;
                    res.data.map((value) => {
                        rss += value.quantityProduct*value.price;
                    })
                    setResult(res.data)
                    setTotals( toStringMoney(rss))
                console.log('cart')
                })
                console.log('ao that su luon')
                
        }
        console.log( document.querySelector('.header-cart'));
        
    },[])

    const maptoNumber = (string) => {
        while(string.indexOf('.') != -1) {
            string=string.replace('.','')
          }
          string=string.replace('đ',"")
          var x = Number(string)
           return x;
    }
    
    
    // document.querySelector('.header-cart').style.display = 'none';
   const   handleOnblur = (e, price) => {
        // console.log(e.target.getAttribute('placeholder'))
        if(e.target.value != '' ) {
            console.log(maptoNumber(totals))
            var total = maptoNumber(totals) - e.target.getAttribute('placeholder')*price;
            var KeyId = e.target.parentElement.parentElement.querySelector('.form-check-input').getAttribute('data-id');
            // console.log(KeyId)
            var a = result;
            a[KeyId].quantityProduct = e.target.value;
            e.target.parentElement.nextElementSibling.firstElementChild.innerText = e.target.value * price;
            total +=  e.target.value * price;
            e.target.setAttribute('placeholder', e.target.value)
            setTotals( toStringMoney(total))
            setResult(a);
            if(window.sessionStorage.getItem('Cart') != null ) {
                var index = result.findIndex((value) => {
                    return value.id == e.target.getAttribute('id')
                })
                var arr = JSON.parse(window.sessionStorage.getItem('Cart'))
                arr[index].quantityProduct = e.target.value;
                window.sessionStorage.setItem('Cart', JSON.stringify(arr))
            } else {
                axios.post('http://localhost:3001/changeCart', {productId: e.target.getAttribute('id'), quantityProduct: e.target.value})
            }
        }
    }

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

   const  handleOnclick =   (e, price) => {
        var Input = e.target.parentElement.parentElement.parentElement.querySelector('.td4-btn');
        var KeyId = e.target.parentElement.parentElement.previousElementSibling.querySelector('.form-check-input').getAttribute('data-id')
        // console.log(KeyId)
        var a = result;
        a.splice(KeyId,1);
        
       var IdOfProduct = Input.getAttribute('id');
       var total = maptoNumber(totals);
    //    console.log(Input.getAttribute('placeholder'))
        
        total -= price *Input.getAttribute('placeholder');
        setTotals( toStringMoney(total))
        setResult(a);
        if(window.sessionStorage.getItem('Cart') != null ) {
            var arr = JSON.parse(window.sessionStorage.getItem('Cart'));
            arr.splice(KeyId,1);
            window.sessionStorage.setItem('Cart', JSON.stringify(arr))
        } else {
         axios.delete(`http://localhost:3001/removeCart/${IdOfProduct}`,)
        // fetch("http://localhost:3001/removeCart", { method: 'DELETE'})
        }
        dispatch({type: "ADDTOCART"})
        
    }
    var checkbocAll = $('#checkbox-all');
    const handleOnclickCheckAll = (e) => {
        var InputCheckBox = $('input[name="courseIds[]"]');
        console.log(e.target.checked)
        // if(e.target.checked) {
            // InputCheckBox.prop('checked', true);
            
            
        // } else {
            InputCheckBox.prop('checked', e.target.checked);
            console.log(InputCheckBox)
        // }
    }


    const handleOnclickCheckBox = (e) => {
        var InputCheckBox = $('input[name="courseIds[]"]');
        var ischeckedAll = InputCheckBox.length === $('input[name="courseIds[]"]:checked').length;
            checkbocAll.prop('checked', ischeckedAll);
            
    }
    
    const handleCheckOut = (e) => {
        var arrproductCheck = [];
         var array = $('input[name="courseIds[]"]:checked');
         for(var i=0; i< array.length ;++i){
             arrproductCheck.push(result[array.eq(i).attr('data-id')])
             
         }
         setCheckProdduct(arrproductCheck);
         dispatch({type: "CHECKOUT", checkout: {
            checkOutProduct: arrproductCheck,
         }})
         history.push('/checkOut')
    }
    const handleDelete = (e) => {
        var arrproductCheck = [];
        var arr = [];
        var total = maptoNumber(totals);
         var array = $('input[name="courseIds[]"]:checked');
         for(var i=0; i< array.length ;++i){
             arr.push(result[array.eq(i).attr('data-id')].id)
             arrproductCheck.push(result[array.eq(i).attr('data-id')])
             total -= result[array.eq(i).attr('data-id')].quantityProduct*result[array.eq(i).attr('data-id')].price;
         }
         
        
            setResult( result.filter(e => !arrproductCheck.includes(e)) )
            setTotals( toStringMoney(total))
         if(window.sessionStorage.getItem('Cart') != null) {
            window.sessionStorage.setItem('Cart', JSON.stringify(result.filter(e => !arrproductCheck.includes(e))))
         } else {
            axios.post('http://localhost:3001/removeCartAll',{allId: arr})
            .then((res) => {
                
            })
        }
        dispatch({type: "ADDTOCART"})
    }

    

        return (
            <div className="container">
            <div className="wrapper wrapper-content animated fadeInRight">
                <div className="row">
                    <div className="col-md-9">
                        <div className="ibox">
                            <div className="ibox-title">
                                <span className="pull-right">(<strong>{result.length}</strong>) sản phẩm</span>
                                <label>Chọn tất cả</label>
                                <input id="checkbox-all" className="form-check-input-all" type="checkbox" onClick={(e) => handleOnclickCheckAll(e)}></input>
                            </div>
                           {result.map((value, key) => {
                               return (
                           
                            <div className="ibox-content keyofproduct" >
                                <div className="table-responsive" >
                                    
                                            <div className="td1">
                                                <div className="cart-product-imitation">
                                                    <input
                                                    data-id={key}
                                                     name="courseIds[]" className="form-check-input" type="checkbox" onClick={(e) => handleOnclickCheckBox(e)}></input>
                                                    <img src={value.image}></img>
                                                </div>
                                            </div>

                                            <div className="desc td2">
                                                <h3>
                                                    <a href="#" className="text-navy">
                                                        {value.type}
                                                    </a>
                                                </h3>
                                                <p className="small">
                                                    {value.name} 
                                                </p>
                                                <dl className="small m-b-none">
                                                    <dt>Description lists</dt>
                                                    <dd>A description list is perfect for defining terms.</dd>
                                                </dl>
                                                <div className="m-t-sm">
                                                    <p  className="text-muted" onClick ={(e) => handleOnclick(e, value.price)}><i className="fa fa-trash"></i> Remove item</p>
                                                </div>
                                            </div>

                                            <div className="td3" >
                                                {toStringMoney(value.price)}
                                            </div>

                                            <div className="td4">
                                                {/* <input type="text" className="form-control" placeholder="1"></input> */}
                                                <input autocomplete="off" 
                                                className="td4-btn" 
                                                type="text" 
                                                id={value.id}
                                                placeholder={value.quantityProduct}
                                                 onBlur={(e) =>handleOnblur(e, value.price)}></input>
                                            </div>

                                            <div className="td5">
                                                <h4 className="caculateProduct">
                                                    {toStringMoney(value.price*value.quantityProduct)}
                                                </h4>
                                            </div>
                                       
                                </div>
                            </div>
                               )
                            })}
                            <div className="ibox-content">
                                <button className="btn btn-primary pull-right" onClick={(e) => handleCheckOut(e)}><i className="fa fa fa-shopping-cart"></i> Checkout</button>
                                <button className="btn btn-white"><i className="fa fa-arrow-left"></i> <Link to="/giay">Continue shopping</Link></button>
                                <br></br>
                                <button className="btn btn-white" onClick={(e) => handleDelete(e)}><i className="fa fa-arrow-left"></i> DELTE</button>
          
                            </div>
                        </div>
            
                    </div>
                    <div className="col-md-3">
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Cart Summary</h5>
                            </div>
                            <div className="ibox-content">
                                <span>
                                    Total
                                </span>
                                <h2 className="font-bold">
                                    {totals}
                                </h2>
            
                                <hr></hr>
                                <span className="text-muted small">
                                    *For United States, France and Germany applicable sales tax will be applied
                                </span>
                                <div className="m-t-sm">
                                    <div className="btn-group">
                                    <a href="#" className="btn btn-primary btn-sm"><i className="fa fa-shopping-cart"></i> Checkout</a>
                                    <a href="#" className="btn btn-white btn-sm"> Cancel</a>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                        <div className="ibox">
                            <div className="ibox-title">
                                <h5>Support</h5>
                            </div>
                            <div className="ibox-content text-center">
                                <h3><i className="fa fa-phone"></i> +43 100 783 001</h3>
                                <span className="small">
                                    Please contact with us if you have any questions. We are avalible 24h.
                                </span>
                            </div>
                        </div>
            
                        <div className="ibox">
                            <div className="ibox-content">
            
                                <p className="font-bold">
                                Other products you may be interested
                                </p>
                                <hr></hr>
                                <div>
                                    <a href="#" className="product-name"> Product 1</a>
                                    <div className="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div className="m-t text-righ">
            
                                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                                <hr></hr>
                                <div>
                                    <a href="#" className="product-name"> Product 2</a>
                                    <div className="small m-t-xs">
                                        Many desktop publishing packages and web page editors now.
                                    </div>
                                    <div className="m-t text-righ">
            
                                        <a href="#" className="btn btn-xs btn-outline btn-primary">Info <i className="fa fa-long-arrow-right"></i> </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
        
}
export default Cart;