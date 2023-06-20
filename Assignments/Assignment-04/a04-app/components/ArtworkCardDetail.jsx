import React from 'react';
import useSWR from 'swr';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

export default function ArtworkCardDetail({ objectID }) {
    // Make a call to the museum API using the objectID passed as props to this component
    const { data, error } = useSWR(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectID}`);

    // Throw an error if the API request fails
    if (error) {
        return <Error statusCode={404} />;
    } else {
        // Validate the data
        if (!data || data.length === 0) {
            return null;
        }
        else {
            return (
                <Card style={{ width: '18rem' }}>
                    {data.primaryImageSmall && <Card.Img variant="top" src={data.primaryImage} />}
                    <Card.Body>
                        {data.title ? <Card.Title>{data.title}</Card.Title> : <Card.Title>N/A</Card.Title> }
                        <Card.Text>
                            {data.objectDate ? <p>{data.objectDate}</p> : <p>N/A</p> }
                            {data.classification ? <p>{data.classification}</p> : <p>N/A</p> }
                            {data.medium ? <p>{data.medium}</p> : <p>N/A</p> } <br /><br />
                            {data.artistDisplayName ? <span><p>{data.artistDisplayName}</p><p><a href={data.artistWikidata_URL} target="_blank" rel="noreferrer">wiki</a></p></span> : <p>N/A</p> }
                            {data.creditLine ? <p>{data.creditLine}</p> : <p>N/A</p> }
                            {data.dimensions ? <p>{data.dimensions}</p> : <p>N/A</p> }
                        </Card.Text>
                        <Link passHref legacyBehavior href={`/artwork/${objectID}`}><Button variant="primary">{ objectID }</Button></Link>
                    </Card.Body>
                </Card>
            );
        }
    }
}