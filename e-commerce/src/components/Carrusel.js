import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function Carrusel() {

    //config carousel variable
    const CarouselItems = [
        {
            image: '"../../public/images/carrusel2.jpg"',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            image: '"../../public/images/carrusel2.jpg"',
            label: 'Second slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            image: '"../../public/images/carrusel2.jpg"',
            label: 'Third slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
        {
            image: '"../../public/images/carrusel2.jpg"',
            label: 'Fourth slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        },
    ]

  return (
    <Carousel>
        {CarouselItems.map(item => {
            return <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="../../public/images/carrusel2.jpg"
                    alt={item.image}
                />
                <Carousel.Caption>
                    <h3>{item.label}</h3>
                    <p>{item.description}</p>
                </Carousel.Caption>
            </Carousel.Item>
        })}
    </Carousel>
  );
}

export default Carrusel;