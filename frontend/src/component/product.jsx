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
    
    
    setState({ ...state, limit: state.limit + 1 });
    axios
      .get(`https://productpagebackend.herokuapp.com/product/get/?_limit=${state.limit}`)
      .then(data => {
        setState({ ...state, posts: state.posts.concat(data.data) });
        console.log("fetched data", data.data);
      });
  };
  useEffect(() => {
    axios
      .get(`https://productpagebackend.herokuapp.com/product/get/?_limit=${state.limit}`)
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
      loader={<div><img src="https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large/is-moderation-mode/true?v=v2&px=999"/></div>}
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
