import React, { useEffect, useState } from 'react'
import axios from 'axios'
const DataCall = () => {
    const [data,setData]=useState([])


    useEffect(()=>{ 
        axios.get('url')
        .then((res)=>{
          console.log(res.data);
          setData(res.data)
      
        })
        .catch((err)=>{
          console.log(err);
        })
       },[])
console.log("data",data)
  return (
    <div>
      
    </div>
  )
}

export default DataCall
