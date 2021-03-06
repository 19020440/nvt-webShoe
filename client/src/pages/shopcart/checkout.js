import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link,useHistory } from "react-router-dom";
import axios from 'axios'
import $ from 'jquery'
import {useDispatch, useSelector} from 'react-redux'
import {connect} from 'react-redux'
import {Formik, Form, Field, ErrorMessage, validateYupSchema} from "formik"

class CheckOut extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            address: [],
            product: [],
        }
    }
    
    componentWillMount() {
        axios.get('http://localhost:3001/checkAddress')
            .then((res) => {
                if(res.data.address) {
                    document.querySelector('.modal').style.display = 'none';
                    this.setState({product: this.props.data.checkOutProduct,
                    address: res.data.value})
                } 
            })
    }
    
    //  onsubmit = (e) => {
        
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
    //     const formObject = Object.fromEntries(formData);
    //     axios.post('http://localhost:3001/addAddress', formObject)
    //     .then((res) => {
            
            
    //     })
    //     document.querySelector('.modal').style.display = 'none';
    //     this.setState({
    //         address: formData,
    //     });
        
    // }


     onSubmit = (data) => {
         if(window.sessionStorage.getItem('Login') != null) {
             if(window.sessionStorage.getItem('Cart') != null){
                window.sessionStorage.setItem('Address', JSON.stringify(data))
                this.setState({
                    address: [data]
                })
             }
         } else {
            axios.post('http://localhost:3001/addAddress', data)
                .then((res) => {
                    console.log(res.data)
                
                
                })
                this.setState({
                    address: [data]
                })
            }
                document.querySelector('.modal').style.display = 'none';
        
    }




    
    render() {
        const initialValue = {
            fullname: '',
            phonenumber: '',
            tinh: '',
            quanhuyen: '',
            phuongxa: '',
            cuthe: '',
        }
        var rs = this.state.address;
        console.log(rs)
        var total = 0;
        for(var i=0 ;i <this.props.data.checkOutProduct.length; ++i) {
            total += this.props.data.checkOutProduct[i].price*this.props.data.checkOutProduct[i].quantityProduct;
        }
        return (
            <div>
                
                <div className="container">
                    <div className="wrapper wrapper-content animated fadeInRight">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="ibox">
                                    <div className="ibox-title">

                                       

                                        <span className="pull-right">(<strong>{this.props.data.checkOutProduct.length}</strong>) s???n ph???m</span>
                                        
                                        
                                    </div>

                                    <div className="checkout-address">
                                        <h1 className="checkout-address-text">?????a ch??? giao h??ng</h1>
                                        {rs.map((value) =>{
                                             return ( 
                                                <div className="checkout-address-box">
                                                    {/* {value.fullname} */}
                                                    <h2>{value.fullname} (+84) {value.phonenumber}</h2>
                                                    <span>{value.tinh}, {value.quanhuyen}, {value.phuongxa}, {value.cuthe}</span>
                                                </div>
                                         )})
                                        } 
                                    </div>
                                    
                                {this.props.data.checkOutProduct.map((value,key) => {

                                    return (
                                    <div className="ibox-content keyofproduct" >
                                        <div className="table-responsive" >
                                            
                                                    <div className="td1">
                                                        <div className="cart-product-imitation">
                        
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
                                                        
                                                    </div>

                                                    <div className="td3" >
                                                        <div> ????n gi??</div>
                                                        <p>{value.price}</p>
                                                    </div>

                                                    <div className="td4">
                                                        <div> S??? l?????ng</div>
                                                        <p>{value.quantityProduct}</p>
                                                    
                                                    </div>

                                                    <div className="td5">
                                                        <div>Th??nh ti???n</div>
                                                        <h4 className="caculateProduct">
                                                            {value.price*value.quantityProduct}
                                                        </h4>
                                                    </div>
                                            </div>
                                        </div>
                                         )
                                        })}
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
                                            {total}
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
                            </div>
                        </div>
                    </div>
                </div>




        <div className="modal">
            <div className="modal__overlay"></div>
            <div className="modal__body">
                
                    
                <div className="auth-form">
                    <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">????ng k??</h3>
                        
                    </div>
                    <Formik initialValues={initialValue} onSubmit={(data) => this.onSubmit(data)} >
                        <Form>
                            <div className="auth-form__form" >
                                <div className="auth-form__group">
                                    <label className="auth-form__label">H??? v?? t??n</label>
                                    <Field type="text" className="auth-form__input" placeholder="H??? v?? t??n" name="fullname"></Field>
                                </div>

                                <div className="auth-form__group">
                                    <label className="auth-form__label">S??? ??i???n tho???i</label>
                                    <Field type="text" className="auth-form__input" placeholder="S??? ??i???n tho???i" name="phonenumber"></Field>
                                </div>

                                <div className="auth-form__group">
                                    <label className="auth-form__label">T???nh</label>
                                    <Field type="text" className="auth-form__input" placeholder="T???nh" name="tinh"></Field>
                                </div>
                                <div className="auth-form__group">
                                    <label className="auth-form__label">Qu???n/Huy???n</label>
                                    <Field type="text" className="auth-form__input" placeholder="Qu???n/Huy???n" name="quanhuyen"></Field>
                                </div>
                                <div className="auth-form__group">
                                    <label className="auth-form__label">Ph?????ng/X??</label>
                                    <Field type="text" className="auth-form__input" placeholder="Ph?????ng/X??" name="phuongxa"></Field>
                                </div>

                                <div className="auth-form__group">
                                    <label className="auth-form__label">?????a ch??? c??? th???</label>
                                    <Field type="text" className="auth-form__input" placeholder="?????a ch??? c??? th???" name="cuthe"></Field>
                                </div>
                                
                                <button className="btn btn--primary" type="submit" >X??c nh???n</button>
                            </div>


                        </Form>
                        
                    </Formik>

                    <div className="auth-form__controls">
                        <button className="btn">Tr??? L???i</button>
                        
                    </div>
                    {/* <div className="auth-form__aside">
                        <p className="auth-form__policy-text">
                            B???ng vi???c ????ng k??, b???n ???? ?????ng ?? v???i shoppe v??? 
                            <a href="" className="auth-form__text-link"> ??i???u kho???n d???ch v???</a> &
                            <a href="" className="auth-form__text-link"> Ch??nh s??ch b???o m???t</a>
                        </p>
                    </div> */}

                    
                </div>

                    {/* <div className="auth-form_socials">
                        <a href="" className="btn btn--with-iconfb btn--size-s">
                            <i className="auth-form_socials-icon fab fa-facebook-square"></i>
                            <span className="auth-form__title">K???t n???i v???i facebook</span>
                        </a>
                        <a href="" className="btn btn--with-icongg btn--size-s">
                            <i className="auth-form_socials-icon fab fa-google"></i>
                            <span className="auth-form__title">K???t n???i v???i google</span>
                            
                        </a>
                        
                    </div> */}
                </div>

                
            </div>
        </div>
    </div>
        )
    }  
}

const mapStateToProps = (state, ownProps) => {
    return {
        data: state.checkOut,
    }
}

export default connect(mapStateToProps,null)(CheckOut);