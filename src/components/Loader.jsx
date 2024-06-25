import React from 'react'
import video1 from '../assets/videos/vid1.mp4';
import video2 from '../assets/videos/vid2.mp4';


const Loader = () => {
    return (
        <>
            <section className='loader w-full h-screen fixed bg-black z-[100]'>
                <div className="black1 bg-black absolute z-[104] w-full h-screen"></div>
                <div className="black2 bg-black absolute z-[103] w-full h-screen"></div>
                <video loop muted autoPlay className='h-full w-full absolute object-cover z-[102]'>
                    <source src={video1} type="video/mp4" />
                </video>
                <video loop muted autoPlay className='h-full w-full absolute object-cover z-[102.5]'>
                    <source src={video2} type="video/mp4" />
                </video>
                <div className='absolute top-[10%] left-1/2 -translate-x-1/2 z-[105]'>
                    <h1 className='text-white uppercase text-center font-bold font_bai_jamjuree text-[20vw] leading-[20vw]'>flirty flower</h1>
                </div>
            </section>
        </>
    )
}

export default Loader