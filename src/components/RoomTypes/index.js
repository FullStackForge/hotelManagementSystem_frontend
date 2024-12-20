'use client'
import React, { useState } from 'react';
export default function roomTypes({item}) {
  var imgs = item.room_type_imgs
  if(imgs[0]){
    var first_img = imgs[0].image
  }else{
    var first_img = '/hotel-exterior.jpg'
  }
  return (
    <>

      <section className="flex space-x-8">
        <div className='flex m-4'><a href={`/room-types/${item.uuid}`}>{item.title}</a> 
          <img src={first_img} alt="" width='50'/>
        </div>
        {/* <div><a href="/room-types/double-room">Double Bedroom</a></div> */}
        {/* <div><a href="">Single Bedroom</a></div> */}
      </section>
    </>
  );
}
