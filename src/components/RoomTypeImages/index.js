'use client'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function RoomTypeImages({images}){
    return(
        <Carousel showThumbs={false} className="w-52">
            {images.map((img,index)=>(
                <div>
                <img src={img.image} alt=""/>
            </div>
            ))}
            
        </Carousel>
    )
}