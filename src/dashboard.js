import React from 'react';
import { useState } from 'react';
import { Getid } from './getid';
import Newscard from './components/newsCard';

const baseUrl = 'https://hacker-news.firebaseio.com/v0/item/';

export const Dashboard = ({searchText}) => {
    const [posts, setPosts] = useState([]); //[]
    const sanitisedPosts = posts?.slice(0, 21).map(post => baseUrl + post + ".json");
    console.log(sanitisedPosts, searchText);
    return (
        <>
            <Getid callback={setPosts} />

            <div style={{
                justifyContent: 'center', display: 'grid',
                alignContent: 'center',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 3fr))',
                gridGap: '1rem'
            }}>
                {
                    sanitisedPosts?.map((post, idx) => {
                        return <Newscard url={post} key={idx} searchText={searchText}/>
                    })
                }
            </div></>
    )
}