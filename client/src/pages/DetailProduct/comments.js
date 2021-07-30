
import React, {useEffect, useState}  from 'react';
import { useHistory, useLocation, useParams } from "react-router-dom";

import axios from 'axios';

function Comment(props) {
  let params = useParams();
  let count = 0;
  const [comment, setComment] = useState([]);
  console.log('hihiihihihihiih');
  useEffect(() => {
    axios.get(`http://localhost:3001/getComments/${params.id}`)
      .then((res) => {
        setComment(res.data);
        
      })
      
  },[])
  const handleOnclick = (e) => {
    var texts = e.target.previousElementSibling.value;
    console.log(texts);
   axios.post('http://localhost:3001/comments', {comment: e.target.previousElementSibling.value, idProduct: params.id}) 
      .then((res) => {
        
        var arr = {text: texts, username: res.data.username, avatar: res.data.avatar}
        console.log(arr)
        setComment([...comment, arr])
      })

      e.target.previousElementSibling.value = '';

  }
  return (
    <div className="detail-product-comment">
        <h1 className="detail-product-comment-text">Đánh Giá Sản Phẩm</h1>

        <ul className="detail-product-comment-item">
          {comment.map((value, key) => {
            return (
              <li className="detail-product-comment-list">
                <div className="detail-product-comment-list-profile">
                  <img className="detail-product-comment-list-avatar" src={value.avatar}></img>
                  <p className="detail-product-comment-list-username">{value.username}</p>
                </div>

                <p>{value.text}</p>
              </li>
            )
          })}
            
        </ul>

        <div className="detail-product-comment-write">
            <textarea className="detail-product-comment-write-text"></textarea>
            <button onClick={(e) => handleOnclick(e)}>PUSH UP</button>
        </div>
    </div>
            
          
  );

  }
export default Comment;