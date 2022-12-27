import React from 'react';
import { useState,useEffect } from 'react';

export const Getid=(props)=>{
    const [getId,setGetId]=useState([]);
    useEffect(()=>{
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
        .then((response)=>response.json())
        .then((data)=>
        {
            //console.log(data)
            setGetId(data);
            props.callback(data);// []
        })
        .catch((err) => {
            console.log(err.message);
         });
    },[])
    return(
    <div>
      
    </div>
    )
}