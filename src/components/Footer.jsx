import React, { useEffect, useRef } from 'react'
import SplitText from '../utils/splitText'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {

    const footerRef = useRef(null)

    useEffect(() => {

        let ctx = gsap.context(() => {

            const split = new SplitText(footerRef.current, {
                type: 'lines',
                linesClass: 'lineChildren'
            });

            const splitParent = new SplitText(footerRef.current, {
                type: 'lines',
                linesClass: 'lineParent'
            });

            gsap.to(split.lines, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.3,
                ease: 'power2',
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: 'top 70%',
                    end: 'top 10%',
                    // markers: true,
                    scrub: 3,
                }
            });

            ScrollTrigger.refresh();

        }, footerRef)

        return () => ctx.revert();

    }, [])

    return (
        <>
            <section data-scroll-section className='mb-[15%] mt-[10%] w-full h-screen relative px-[5vw]'>
                <h3 className='font-bold text-center mb-2 font_syncopate text_gray'>MADE IN</h3>
                <div className='absolute top-[15%] left-1/2 -translate-x-1/2'>
                    <h1 ref={footerRef} id='footer__title' className='text-center font-bold font_bodoni uppercase text-[18vw] leading-[18vw] text-[#222222]'>rio de janeiro</h1>
                </div>
            </section>
        </>
    )
}

export default Footer