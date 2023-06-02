import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Users() {
    // State
    const [ data, setData ] = useState([]);

    // useEffect Hook
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((results) => results.json())
        .then((dataFetched) => {
            console.log(dataFetched);
            setData(dataFetched);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    

    return (
      <>
        <Table bordered>
            <thead>
                <tr>
                    <th>USER ID</th>
                    <th>ID</th>
                    <th>TITLE</th>
                </tr>
            </thead>
            <tbody>
                {   data.map((row, i) => (
                        <tr key={i}>
                            <td>{row.userId}</td>
                            <td>{row.id}</td>
                            <td>{row.title}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
      </>
    )
  }