
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";


const Newscard = (props) => {
    const [cardData, setCardData] = useState({});

    useEffect(() => {
        if (props?.url.length > 0) {
            fetch(props.url).then(response => response.json()).then(resp => setCardData(resp))

        }
    }, [props.url])
    return (
        <div >

            <Card style={{
                width: '18rem',
                border: '0.1rem solid black',
                margin: '0.5rem',
                padding: '0.5rem',
                borderRadius: '0.5rem'

            }}>
                <Card.Title style={{ fontWeight: "bold" }}>{cardData?.title}</Card.Title>
                <Card.Subtitle>Username:{cardData?.by}</Card.Subtitle> 
                <Card.Subtitle>Likes:{cardData?.score}</Card.Subtitle>
               <Card.Link style={{ textDecoration: 'underline', color: 'black', background: '#FFFDD0', borderRadius: '2rem' }} href={cardData?.url}>{`Source Link`}</Card.Link>
            </Card>

        </div>
    )
};

export default Newscard;