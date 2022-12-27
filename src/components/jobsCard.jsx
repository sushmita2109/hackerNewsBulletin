import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

export const JobsCard=(props)=>{
    const [jobCard,setJobCard]=useState({});
    useEffect(()=>{
        if(props?.url.length>0)
        fetch(props.url)
        .then((response)=>response.json())
        .then((data)=>setJobCard(data))
    },[props.url])
    // console.log(jobCard)
    return(
        <>
        <Card style={{
                width: '18rem',
                border: '0.1rem solid black',
                margin: '0.5rem',
                padding: '0.5rem',
                borderRadius: '0.5rem'

            }}>
            <Card.Title style={{ fontWeight: "bold" }}>{jobCard.title}</Card.Title>
            <Card.Subtitle>{jobCard.by}</Card.Subtitle>
        </Card>
        </>
    );
}