import React, { useEffect, useRef } from 'react'
import plants from '../assets/featured_plants.avif'
import plant from '../assets/featured_plant.avif'
import gsap from 'gsap'
import ScrollTrigger from "gsap/ScrollTrigger";


const Featured = () => {

    const sectionRef = useRef(null);

    useEffect(() => {

        let ctx = gsap.context(() => {

            gsap.to('img', {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 50%',
                    end: 'bottom 50%',
                    // markers: true,
                    scrub: true,
                    toggleClass: {
                        targets: 'img',
                        className: 'is_reveal',
                    },
                },
            })

            ScrollTrigger.refresh();

        }, sectionRef);

        return () => ctx.revert();

    }, [])

    return (
        <>
            <section ref={sectionRef} className='my-[15%] w-full h-full px-[5vw]' data-scroll-section>
                <div className="featured_item flex justify-between items-center">
                    <div className='w-[25%] h-full'>
                        <h3 className='font-medium text-xl mb-2'>GREEN</h3>
                        <img data-scroll src={plants} alt="" />
                    </div>
                    <div className='w-[65%] h-full relative'>
                        <h3 className='-rotate-90 absolute bottom-1 -left-11 font-medium text-xl'>LILY</h3>
                        <img data-scroll className='w-full h-[125vh] object-cover object-center' src={plant} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Featured