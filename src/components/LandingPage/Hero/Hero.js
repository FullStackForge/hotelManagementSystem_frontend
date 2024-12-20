'use client'
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
export default function Hero() {
  const [BannerList, setBannerList] = useState([])
  async function fetchData() {
    const banners = await fetch('http://127.0.0.1:8000/api/banners')
    const res = await banners.json()
    setBannerList(res.results)
  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div className="bg-white py-20">
      <Carousel showThumbs={false} className="h-96 mx-auto w-4/5">
      {
        BannerList.map((item,index)=>(
          <div key={index} className="border border-8 border-gray-400 rounded-xl">
                    <img src={item.image} className="h-96 border border-8"/>
                    <p className="legend">{item.title}</p>
                </div>
        ))
      }
            </Carousel>
    </div>
  );
}
