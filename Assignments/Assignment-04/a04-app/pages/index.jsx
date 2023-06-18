/*********************************************************************************
*  WEB422 – Assignment 4
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Aryan Khurana Student ID: 145282216 Date: 19 June 2023
*
********************************************************************************/ 

import React from 'react';
import ArtworkCard from '@/components/ArtworkCard';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <>
      <Container>
          <Row>
              <Col md={6}>
                  <Image width="80%" src="https://upload.wikimedia.org/wikipedia/commons/3/30/Metropolitan_Museum_of_Art_%28The_Met%29_-_Central_Park%2C_NYC.jpg" rounded />
              </Col>
              <Col md={6}>

              </Col>
          </Row>
      </Container>
      <ArtworkCard objectID="100" />
    </>
  )
}