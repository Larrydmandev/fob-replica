import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Connect() {
  return (
     <section className="con-sec">
           <div className="main-con">
             <h4 className="text-center">Enjoy a Whole New Way of Connecting</h4>
           </div> 
            <Row>
                <Col md={3}>
                   <div className="con-div">
                       <img src="./images/bar.png" style={{width: '15%', height: '15%', position: 'relative', left:'5%'}} alt="" />

                       <div className="sub-con-div">
                         <h5>Unlimited Streaming</h5>
                        </div>
                        <div className="sub-sub-con-div">
                         <p className="text-muted">
                           Entertainment and education becomes a breeze with unlimited FiberOne Broadband
                         </p>
                        </div>
                   </div>
                
                </Col>
                <Col md={3}>
                   <div className="con-div">
                       <img src="./images/house.png" style={{width: '30%', height: '30%', position: 'relative', left:'5%'}} alt="" />

                       <div className="sub-con-div-1">
                         <h5>Working from home</h5>
                        </div>
                        <div className="sub-sub-con-div">
                         <p className="text-muted">
                           You’ll be able to download and upload all the files you need to keep business as usual.
                         </p>
                        </div>
                   </div>
                
                </Col>
                <Col md={3}>
                   <div className="con-div">
                       <img src="./images/remote.png" style={{width: '25%', height: '25%', position: 'relative', left:'5%'}} alt="" />

                       <div className="sub-con-div-2">
                         <h5>Seamless Gaming</h5>
                        </div>
                        <div className="sub-sub-con-div">
                         <p className="text-muted">
                            You’ll be able to download massive games and be able to play them at the speed of light!
                         </p>
                        </div>
                   </div>
                
                </Col>
                <Col md={3}>
                   <div className="con-div">
                       <img src="./images/globe.jpg" style={{width: '30%', height: '30%', position: 'relative', left:'5%'}} alt="" />

                       <div className="sub-con-div">
                         <h5>Unlimited Streaming</h5>
                        </div>
                        <div className="sub-sub-con-div">
                         <p className="text-muted">
                           Entertainment and education becomes a breeze with unlimited FiberOne Broadband
                         </p>
                        </div>
                   </div>
                </Col>
            </Row>
     </section>
    )
}

export default Connect