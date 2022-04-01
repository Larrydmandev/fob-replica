import React from 'react'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
    <section className="bg-light abt-sec">
        <Row>
            <Col md={6}>
               <div className="main-abt">
                   <p className="abt-p">
                       <p className="abt-p2">
                          <span className="abt-span">A</span>
                          <span className="abt-span-1">B</span>
                          <span className="abt-span-2">O</span>
                          <span className="abt-span-3">U</span>
                          <span className="abt-span-4">T</span> 
                          &nbsp; 
                          <span className="abt-span-5">U</span>
                          <span className="abt-span-6">S</span>
                       </p>
                        <p className="abt-p1">
                          FiberOne offers you the fastest and truly unlimited home/office internet at a cheap rate. Our Broadband service allows you to enjoy a whole new way of connecting to and streaming music, movies, Skype and gaming. Not only do we ensure you get the speed you pay for, but it stays reliably fast – even during peak times. Blazing fast connectivity without breaking the bank!
                       </p>
                    </p>
               </div>
            </Col>
            <Col md={6}>
               <div className="abt-vid">
                  <iframe style={{width: '450', height: '400'}}
                  src="https://youtu.be/w8NBx7bfbYc"
                  frameBorder={0} allowFullScreen></iframe>
               </div>
            </Col>
        </Row>
    </section>
  )
}

export default About