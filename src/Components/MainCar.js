import React from 'react'
import {Carousel} from 'react-bootstrap'

function MainCar() {
  return (
    <section className="car-sec">
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w8.png"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-50"
                src="./images/w7.png"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w6.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w5.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w4.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w3.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w2.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="./images/w1.png"
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default MainCar