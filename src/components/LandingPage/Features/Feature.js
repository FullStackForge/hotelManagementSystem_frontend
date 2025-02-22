export default function Features(){
    return(
        
        <section className="py-12 bg-black sm:py-16 lg:py-20 xl:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-lg mx-auto text-center lg:max-w-2xl">
                    <h2 className="text-3xl font-normal text-white sm:mt-8 sm:text-4xl lg:text-5xl xl:text-6xl">Features</h2>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-12 text-center lg:max-w-none lg:grid-cols-3 sm:mt-16 lg:mt-20">
                    <div className="relative overflow-hidden bg-base-900 rounded-2xl">
                        <a href="/room-types" className="px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
                            <h3 className="text-sm font-normal tracking-widest uppercase">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Unlimited resources </span>
                            </h3>
                            <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">Room Types</p>
                            <p className="mt-4 text-base font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </a>

                        <div className=" inset-x-0 bottom-0 flex items-center justify-center">
                            <img className="object-contain w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/1/feature-1.png" alt="" />
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-base-900 rounded-2xl">
                        <a href="#" className="px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
                            <h3 className="text-sm font-normal tracking-widest uppercase">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Connect Easily </span>
                            </h3>
                            <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">Events</p>
                            <p className="mt-4 text-base font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </a>

                        <div className=" inset-x-0 bottom-0 flex items-center justify-center px-8 pb-6">
                            <img className="object-contain w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/1/feature-2.png" alt="" />
                        </div>
                    </div>

                    <div className="relative overflow-hidden bg-base-900 rounded-2xl">
                        <a href="#" className="px-6 pt-8 pb-56 sm:pb-80 lg:pb-52 xl:pb-64 sm:px-12 lg:px-8 xl:px-12 sm:pt-14">
                            <h3 className="text-sm font-normal tracking-widest uppercase">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500"> Use Anywhere </span>
                            </h3>
                            <p className="mt-3 text-2xl font-normal text-white xl:text-3xl">Online booking</p>
                            <p className="mt-4 text-base font-normal text-gray-400">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        </a>

                        <div className=" inset-x-0 bottom-0 flex items-center justify-center px-16 transform">
                            <img className="object-contain w-full" src="https://landingfoliocom.imgix.net/store/collection/dusk/images/features/1/feature-3.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}