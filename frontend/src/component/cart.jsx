import axios from "axios";
import React from "react";
import { useState,useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./main.module.css"

const Cart =()=>{
  const {id} = useParams()
  const [singal,setSingal] = useState({})
  const navigate = useNavigate()
  useEffect(()=>{
      axios.get(`https://productpagebackend.herokuapp.com/product/get/${id}`).then(({data})=>{
         setSingal(data)
      })
  },[])
  
    return <div>
           <div className={styles.detail}>
               <div>
                     <img src={singal.image}/>
               </div>
               <div className={styles.right}>
                    <h4>{singal.title}</h4>
                    <p>{singal.description}</p>
                    <p>Rs.{singal.price}</p>
                    <div className={styles.btn}>
                        <button>Add To Cart</button>
                        <button onClick={()=>navigate("/")}>Back To Product</button>
                    </div>
               </div>
              
           </div>
    </div>
}
export default Cart