
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import {useEffect, useState } from 'react';
import {connect, useSelector, useDispatch} from 'react-redux'
import { withRouter } from "react-router";



 function Footer(props) {
    








    return (

        <div>
            <footer class="text-center text-white" >
                    
    
            <div class="container p-4">
                
                <section class="">
                <div class="row">
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbootstrap.com/img/new/fluid/city/113.jpg"
                        class="w-100"
                        />
                        <a href="#!">
                        <div
                            class="mask mask2"
                            
                        ></div>
                        </a>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbootstrap.com/img/new/fluid/city/111.jpg"
                        class="w-100"
                        />
                        <a href="#!">
                        <div
                            class="mask mask2"
                        
                        ></div>
                        </a>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbootstrap.com/img/new/fluid/city/112.jpg"
                        class="w-100"
                        />
                        <a href="#!">
                        <div
                            class="mask mask2"
                            
                        ></div>
                        </a>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbootstrap.com/img/new/fluid/city/114.jpg"
                        class="w-100"
                        />
                        <a href="#!">
                        <div
                            class="mask mask2"
                        
                        ></div>
                        </a>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbootstrap.com/img/new/fluid/city/115.jpg"
                        class="w-100"
                        />
                        <a href="#!">
                        <div
                            class="mask mask2"
                        
                        ></div>
                        </a>
                    </div>
                    </div>
                    <div class="col-lg-2 col-md-12 mb-4 mb-md-0">
                    <div
                        class="bg-image hover-overlay ripple shadow-1-strong rounded"
                        data-ripple-color="light"
                    >
                        <img
                        src="https://mdbootstrap.com/img/new/fluid/city/116.jpg"
                        class="w-100"
                        />
                        <a href="#!">
                        <div
                            class="mask mask2"
                            
                        ></div>
                        </a>
                    </div>
                    </div>
                </div>
                </section>
                
            </div>
        

            
            <div class="text-center p-3 text-center2" >
                © 2020 Copyright:
                <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            
        </footer> 
        
        
        
<footer class="bg-dark text-center text-white">

  <div class="container p-4">

    <section class="mb-4">

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-facebook-f"></i
      ></a>


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-twitter"></i
      ></a>


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>


      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
    </section>



    <section class="">
      <form action="">

        <div class="row d-flex justify-content-center">

          <div class="col-auto">
            <p class="pt-2">
              <strong>Sign up for our newsletter</strong>
            </p>
          </div>



          <div class="col-md-5 col-12">

            <div class="form-outline form-white mb-4">
              <input type="email" id="form5Example2" class="form-control" />
              <label class="form-label" for="form5Example2">Email address</label>
            </div>
          </div>



          <div class="col-auto">

            <button type="submit" class="btn btn-outline-light mb-4">
              Subscribe
            </button>
          </div>

        </div>

      </form>
    </section>



    <section class="mb-4">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>



    <section class="">

      <div class="row">

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>



        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>



        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>



        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Links</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>

      </div>

    </section>

  </div>



  <div class="text-center p-3 text-center3" >
    © 2020 Copyright:
    <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>

</footer>

        
        </div>

       
    )
 }
 const ShowTheLocationWithRouter = withRouter(Footer);
 export default ShowTheLocationWithRouter;
















// 









