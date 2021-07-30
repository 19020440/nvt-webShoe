
import React, {useEffect}  from 'react';
import { useParams } from "react-router-dom";
import Container from './Container'
import Comment from './comments'
import axios from 'axios';

function ProductId() {

  return (
    <div className="app__container detail-container">
      <div className="grid wide">
          <div className="row">
            <Container />
            <Comment />
          </div>
      </div>
    </div>
            
          
  );

  }
export default ProductId;