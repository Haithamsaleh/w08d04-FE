import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Modal } from "react-modal";
const Posts = () => {
  const [posts, setposts] = useState([]);

  const data = async () => {
    const posts = await axios
      .get("http://localhost:4000/posts/")
      .then((dete) => {
        setposts(dete.data);

        // console.log(dete.data);
      });
  };

  useEffect(() => {
    data();
  }, []);
 

  return (
    <section className={"cards-section"}>
      <div className="info__name"><h1>جميع الكتب</h1>
      </div>
      <div className="cards-container">
        {posts.map((item) => {
          return (
            
            <div className="card">
            <div className="books">
                <h1 className="info__name">{item.dosc}</h1> 
                <h2 className="info__name">تأليـف:{item.auther}</h2>
                
                <p className="info__name">عددالصفحات:{item.pageCount}</p>
                <p className="info__name">تاريخ الطباعة:{item.prantingDate}</p>

                <div className="pdf-container">
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Posts;
