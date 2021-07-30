
import React from 'react';
import axios from 'axios';
import {useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useHistory } from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"
import {useDispatch} from 'react-redux'
function FormLogin () {
    let history = useHistory();
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setValidLogin({username: '', password: ''});
    }
    const [validLogin, setValidLogin] = useState({});
    const initialValue = {
        username: '',
        password: '',
    }
axios.defaults.withCredentials = true;
const onSubmit = (data) => {
    axios.post('http://localhost:3001/login', data)
        .then((res) => {
            console.log(res.data)
            
            if(res.data.succes) {
                // dispatch({type: "ADDTOCART"})
                history.push('/')
                window.location.reload()
               
            }
            else  setValidLogin(res.data)
        })
        
}

const validationSchema  = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(3).max(15).required(),
});
    return (
        <div className="login-form row"> 
           <div className="login-form-box col l-4">
               <div className="login-form-box-b">
                    <b>Khách hàng đã đăng kí</b>
                </div>
               <div className="login-box">
                    <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema }>
                        <Form className="login-form-active">
                            <div className="login-username">
                                <label>UserName: </label><br></br>

                                <Field 
                                autocomplete="off"
                                type="text"
                                name="username" 
                                placeholder="thangthien11"
                                // InputProps={{ onChange: handleChange }}
                                onKeyDown={handleChange}
                                />
                                
                                <ErrorMessage name="username" component="span"/>
                                <span>{validLogin.username}</span>
                            </div>
                            
                            <div className="login-password">
                                <div className="login-password-text">
                                    <label>PassWord: </label><br></br>
                                    <span>Quên mật khẩu</span>
                                </div>
                                
                                <Field 
                                onKeyDown={handleChange}
                                // InputProps={{ onChange: handleChange }}
                                autocomplete="off"
                                name="password" 
                                type="password" 
                                placeholder="abcd"/>
                                <ErrorMessage name="password" component="span"/>
                                <span>{validLogin.password}</span>
                            </div>
                            
                            <div className="login-box-btn">
                                <button type="submit" className="login-btn">Login</button>
                            </div>
                        </Form>
                    </Formik>
               </div>
           </div>

           <div className="login-form-box2 col l-5">
               <div className="login-form-box2-b">
                   <b>Khách hàng đăng kí mới</b>
               </div>

               <div className="login-form-box2-text">
                    <span>
                    Bằng cách tạo tài khoản với cửa hàng của chúng tôi, bạn sẽ có thể di chuyển qua quy trình thanh toán nhanh hơn, lưu trữ nhiều địa chỉ giao hàng, xem và theo dõi đơn hàng của bạn trong tài khoản của bạn và hơn thế nữa.
                    </span>
               </div>
               <div className="login-form-box2-btn">
                    <Link to="/registration" className="login-form-box2-btn-link">Đăng kí</Link>
               </div>
           </div>
        
        </div>
    )
}

export default FormLogin; 