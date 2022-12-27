import React, { useEffect, useState } from "react";
import { JobsCard } from "./jobsCard";

const baseUrl = 'https://hacker-news.firebaseio.com/v0/item/';

export const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty')
            .then((response) => response.json())
            .then((data) =>  setJobs(data))
           
         
    }, [])
    // console.log(jobs);
    const sanitisedJobs = jobs?.slice(0, 21).map(job => baseUrl + job + ".json");
    // console.log(sanitisedJobs);
    return (
        <div style={{
            justifyContent: 'center', display: 'grid',
            alignContent: 'center',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 3fr))',
            gridGap: '1rem'
        }}>

       {
        sanitisedJobs.map((job,index)=>{
            return <JobsCard url={job} key={index}/>
        })
       }

        </div>
    )
}
