import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './css/Carousel.css'
class CarouselComponent extends Component {
    // const images = ['/building.jpg', '/climbing.jpg', '/cooking.jpg', '/broadway.jpg', '/majesticTheater.jpg']

    
    render() {
        return (
            <Carousel>
                <div>
                    <img src="/building.jpg" alt = "building"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/climbing.jpg" alt = "climbing"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/exploring.jpg" alt = "climbing"/>
                    <p className="legend">Legend 2</p>
                </div>
                 <div>
                    <img src="/broadway.jpg" alt = "climbing"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/majesticTheater.jpg" alt = "climbing"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="/cooking.jpg" alt = "climbing"/>
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
        )
    }
}
export default CarouselComponent;