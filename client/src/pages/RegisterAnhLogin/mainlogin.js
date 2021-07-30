
import React, {useEffect}  from 'react';
import { useParams } from "react-router-dom";
import Login from './login'
import axios from 'axios';

function MainLogin() {

  return (
    <div className="app__container login">
        <div className="grid login wide">
            {/* <div className="row"> */}
                <Login />
            {/* </div> */}
        </div>
    </div>
            
          
  );

  }
export default MainLogin;