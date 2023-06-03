import React from "react";
import Link from "next/link";
import Card from "react-bootstrap/Card";
import MovieDetails from "@/components/MovieDetails";
import PageHeader from "@/components/PageHeader";

// This function gets called at build time
export function getStaticProps() {
    // Call an external API endpoint to get posts
    return new Promise((resolve,reject)=>{
        fetch("https://dull-jade-badger-vest.cyclic.app/api/movies/573a13b9f29313caabd4ddff")
            .then(res => res.json())
            .then(data => {
                // Assign the data to props that we could use later in our function
                resolve({ props: { staticPost: data } })
            })
            .catch(err => {
                reject(err);
            })
    })
}

export default function About({ staticPost }) {
    return (
        <>
            <PageHeader text="About the Developer" />
            <Card>
                <Card.Body>
                    I am a student at Seneca College and am pursuing an Advanced Diploma in Computer Programming and Analysis. I am passionate about Computer Science and Software Development and my goal is to contribute to the society and work towards the betterment of Information Technology. <br /><br />
                    I enjoy problem solving, challenges, researching and developing new technologies and creating software applications for different platforms. I am always prepared to learn new things and gain new experiences. I enjoy meeting people and working with them in a team environment where I get to develop my skills and improve myself. <br /><br />
                    
                    It&apos;s difficult to choose a favourite, but{' '}
                    <Link href="/movies/Interstellar" legacyBehavior>
                        <a>&quot;Interstellar&quot;</a>
                    </Link>{' '}
                    (released in 2014) is one that I always enjoy watching. <br /><br />
                </Card.Body>
                <MovieDetails movie={ staticPost } /> 
            </Card>
        </>
    );
}