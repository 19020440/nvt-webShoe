
import React, {useEffect, useState}  from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch, Link, useHistory} from "react-router-dom";
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from "yup"

function Registration() {
    let history = useHistory();
    const [respon, setRespon] = useState({});
    const initialValue = {
        username: '',
        password: '',
        email: '',
        fullname: '',
        phone: '',
        comfirmpassword:'',
    }

    const handleChange = (e) => {
        setRespon({username: '',email: '',phone: '',});
    }
    const onSubmit = (data) => {
        // console.log(data);
        axios.post('http://127.0.0.1:8000/api/registration', data)
            .then((res) => {
                console.log(res.data);
                if(res.data.regis) history.push('/login');
                else {
                setRespon(res.data)
                }
            })
    }
    
    const validationSchema  = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(3).max(15).required(),
        fullname: Yup.string().required(),
        email: Yup.string().required(),
        phone: Yup.string().required(),
        confirmpassword: Yup.string().required(),
    });

  return (
    <div className="app__container register">
        <div className="grid register wide">
            <div className="row app__contet register ">
            <div className="c-6">
                        <div className="card">
                            <div className="card-header">Thông tin đăng Ký</div>

                            <div className="card-body">
                            <Formik initialValues={initialValue} onSubmit={onSubmit} validationSchema={validationSchema }>
                                <Form >

                                    <div className="form-group">
                                        <label for="name" className="cols-sm-2 control-label">Tên đầy đủ:</label><br></br>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <Field type="text" className="form-control form-control-me" name="fullname" placeholder="Enter your Name" autocomplete="off"/><br></br>
                                                <ErrorMessage name="fullname" component="span"/>
                                                
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group form-group-me">
                                        <label for="email" className="cols-sm-2 control-label">Email:</label> <br></br>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
                                                <Field type="text" 
                                                className="form-control form-control-me" 
                                                name="email"  
                                                onKeyDown={handleChange}
                                                placeholder="Enter your Email" 
                                                autocomplete="off"/>
                                                <ErrorMessage name="email" component="span"/>
                                                <span> {respon.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="name" className="cols-sm-2 control-label">Phone:</label><br></br>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <Field type="text" className="form-control form-control-me" name="phone" placeholder="Enter your phone" autocomplete="off" onKeyDown={handleChange}/><br></br>
                                                <ErrorMessage name="phone" component="span"/>
                                                <span>{respon.phonenumber}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label for="username" className="cols-sm-2 control-label">Tên tài khoản:</label><br></br>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <Field type="text" className="form-control form-control-me" name="username"  placeholder="Enter your Username" autocomplete="off" onKeyDown={handleChange}/>
                                                <ErrorMessage name="username" component="span"/>
                                                <span>{respon.username}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="cols-sm-2 control-label">Mật khẩu:</label><br></br>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                                <Field type="password" className="form-control form-control-me" name="password"  placeholder="Enter your Password" autocomplete="off"/>
                                                <br></br>
                                                <ErrorMessage name="password" component="span"/>
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for="confirm" className="cols-sm-2 control-label form-control-me">Nhập lại mật khẩu:</label><br></br>
                                        <div className="cols-sm-10">
                                            <div className="input-group">
                                               <Field type="password" className="form-control form-control-me " name="confirmpassword"  placeholder="Confirm your Password" autocomplete="off"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group ">
                                    <button type="submit" className="login-btn">Đăng ký</button>
                                    </div>
                                    
                                </Form>
                            </Formik>
                            </div>

                        </div>
                    </div>
            </div>
        </div>
    </div>
            
          
  );

  }
export default Registration;   