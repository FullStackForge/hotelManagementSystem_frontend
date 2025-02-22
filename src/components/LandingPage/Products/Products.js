'use client'
import React, { useState } from "react";
export default function Products() {
  return (
    <section className="relative pt-12 overflow-hidden bg-black sm:pt-16">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-sm font-normal tracking-widest uppercase">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Your startup needs a kick </span>
                </p>
                <h1 className="mt-8 text-4xl font-normal text-white sm:text-5xl lg:text-6xl xl:text-7xl">Gallery</h1>

            </div>

            <div className="relative mt-12 -mb-4 sm:-mb-10 lg:-mb-12 sm:mt-16 lg:mt-24">
                <div className="absolute top-0 transform -translate-x-1/2 left-1/2">
                    <svg className="blur-3xl filter" width="645" height="413" viewBox="0 0 645 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M181.316 218.778C86.2529 123.715 -63.7045 134.94 31.3589 39.8762C126.422 -55.1873 528.427 41.1918 623.49 136.255C718.554 231.319 470.678 289.068 375.614 384.131C280.551 479.195 276.38 313.842 181.316 218.778Z" fill="url(#d)" />
                        <defs>
                            <linearGradient id="d" x1="665.741" y1="178.506" x2="296.286" y2="474.62" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" />
                                <stop offset="100%"  />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className="absolute inset-0">
                    <img className="object-cover w-full h-full opacity-50" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/noise.png" alt="" />
                </div>

                <img className="relative w-full max-w-5xl mx-auto" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/hero/4/dashboard-mockup.png" alt="" />
            </div>
        </div>
    </section>
  );
}
