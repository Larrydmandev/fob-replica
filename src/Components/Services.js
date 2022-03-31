import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Services() {
  return (
    <section className="serv-sec">
        <div className="text-center serv-h3">
            <h3>Services we Provide</h3>
        </div>
        <Row>
            <Col md={4}>
                <div className="main-serv-div">
                    <span className="serv-span">
                        <div>
                            <i className="fa-solid fa-house serv-i"></i>
                        </div>
                    </span>
                    <div className="serv-div">
                        <p className="serv-p">Residential Fiber</p>

                        <div className="serv-div1">
                            <p className="serv-p1">Fiber broadband straight to your door, suitable for home use</p>
                        </div>
                        <div>
                            <button className='btn btn-primary rounded-pill serv-btn btn-lg'>Learn More</button>
                        </div>
                    </div>
                </div>
            </Col>
            <Col md={4}>
               <div className="main-serv-div">
                  <span className="serv-span">
                        <div>
                            <i className="fa-solid fa-envelope serv-i"></i>
                        </div>
                    </span>
                    <div className="serv-div">
                        <p className="serv-p">SME Fiber</p>

                        <div className="serv-div1">
                            <p className="serv-p1">Get access to right data cap broadband for your business</p>
                        </div>
                        <div>
                            <button className='btn btn-primary rounded-pill serv-btn btn-lg'>Learn More</button>
                        </div>
                    </div>
               </div>
            </Col> 
            <Col md={4}>
                <span className="serv-span">
                    <div>
                        <i className="fa-solid fa-laptop serv-i" ></i>
                    </div>
                </span>
                <div className="serv-div">
                    <p className="serv-p">Dedicated Fiber</p>

                    <div className="serv-div2">
                        <p className="serv-p2">Take advantage of truly unlimited internet service with high-speed, for business</p>
                    </div>
                    <div>
                        <button className='btn btn-primary rounded-pill serv-btn btn-lg'>Learn More</button>
                    </div>
                </div>
            </Col>
            
        </Row>
    </section>
  )
}

export default Services