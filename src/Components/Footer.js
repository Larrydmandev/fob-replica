import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Footer() {
  return (
    <section className="foot-sec">
        <Row>
            <Col md={3}>
                <div className="main-foot"> 
                    <div className="h3-div">
                        <h3 className="text-light">Contact Us</h3>
                    </div>
                    <Row>
                        <Col md={1}>
                            <div className="div-i">
                                <i className="fa-solid fa-location-dot foot-i"></i>
                            </div>
                        </Col>
                        <Col md={11}>
                            <div className="loc-div">
                                <p className="text-light">Lekki: 7a, Tunde Joda Street, Off Whitesand School, Lekki Phase 1, Lagos.</p>
                            </div>
                        </Col>
                        <Col md={1}>
                            <div className="div-i">
                                <i class="fa-solid fa-envelope foot-i"></i>
                            </div>
                        </Col>
                        <Col md={11} style={{marginBottom: '5%'}}>
                           <div className="loc-div-1">
                               <a href="#top" className="contact-a">sales@fob.ng</a>
                           </div>
                        </Col>
                        <Col md={1}>
                            <div className="div-i">
                                <i class="fa-solid fa-phone foot-i"></i>
                            </div>
                        </Col>
                        <Col md={11}>
                           <div className="loc-div-2">
                               <a href="#top" className="contact-a">+2349087981900</a>
                           </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col md={3}>
                <div className="main-foot"> 
                    <div className="h3-div">
                        <h3 className="text-light">Company</h3>
                    </div>
                    <div className="li-div">
                        <ul>
                            <li><a href="#top" className="comp-a">About</a></li>
                            <li><a href="#top" className="comp-a-2">Service <span className="span-a">Plans</span> </a></li>
                            <li><a href="#top" className="comp-a-4">Subscribe Now</a></li>
                            <li><a href="#top" className="comp-a-3">MyFOB App</a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="main-foot"> 
                    <div className="h3-div">
                        <h3 className="text-light">Support Links</h3>
                    </div>
                    <div className="li-div">
                        <ul>
                            <li><a href="#top" className="comp-a-1">Help</a></li>
                            <li><a href="#top" className="comp-a-2">Check Coverage</a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            <Col md={3}>
                <div className="main-foot"> 
                    <div className="h3-div-1">
                        <h3 className="text-light">Legal</h3>
                    </div>
                    <div className="li-div-1">
                        <ul>
                            <li><a href="#top" className="comp-a-5">Acceptable Use Policy</a></li>
                            <li><a href="#top" className="comp-a-6">Community Fibre Service</a></li>
                            <li><a href="#top" className="comp-a-7">Service Agreement</a></li>
                            <li><a href="#top" className="comp-a-8">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
            </Col>
            
        </Row>
    </section>
  )
}

export default Footer