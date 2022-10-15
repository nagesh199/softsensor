import React, { useState, useEffect } from "react";
import styles from "./main.module.css"
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";


export const  Product=()=> {
  const [state, setState] = useState({ posts: [], limit: 20 });
  const { posts } = state;
  const navigate = useNavigate()
  console.log("limit", state.limit);

  const fetchData = () => {
    
    
    setState({ ...state, limit: state.limit + 5 });
    axios
      .get(`http://localhost:8080/product/get/?_limit=${state.limit}`)
      .then(data => {
        setState({ ...state, posts: state.posts.concat(data.data) });
        console.log("fetched data", data.data);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8080/product/get/?_limit=${state.limit}`)
      .then(data => {
        setState({ ...state, posts: data.data });
        console.log("initialData", data.data);
      });
  }, []);

  const handleClick = (id) =>{
    navigate(`/cart/${id}`)
     
  }
  console.log("total", state.posts.length);
  return (
    <InfiniteScroll
      dataLength={state.posts.length}
      next={fetchData}
      hasMore={true}
      loader={<div>loader</div>}
    >
      <ul className="App">
        {posts.map((el, index) => (
             <div className={styles.card}>
                    <img src={el.image}/>
                    <h4>{el.title}</h4>
                    <p>Rating : {el.rating.rate}</p>
                    <button onClick={()=>handleClick(el._id)}>Add To Cart</button>
             </div>
        ))}
      </ul>
    </InfiniteScroll>
  );
}
