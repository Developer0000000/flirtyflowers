import React, { useEffect, useRef, useState } from 'react'
import SplitText from '../utils/splitText'
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from 'gsap';

const About = () => {

    const paraRef = useRef(null);

    // useEffect(() => {

    //     let ctx = gsap.context(() => {

    //         const splitText = new SplitText('#about__para', {
    //             type: 'words'
    //             // type: 'lines'
    //         });

    //         gsap.to(splitText.words, {
    //             opacity: 1,
    //             y: -40,
    //             // y: 40,
    //             // x: -40,
    //             // x: 40,
    //             stagger: 0.4,
    //             duration: 2,
    //             ease: 'power2',
    //             scrollTrigger: {
    //                 trigger: paraRef.current,
    //                 start: 'top 50%',
    //                 end: 'bottom 20%',
    //                 // markers: true,
    //                 scrub: true,
    //             }
    //         });

    //         // gsap.to(paraRef, {
    //         //     duration: 1,
    //         //     opacity: 1,
    //         //     stagger: 0.2,
    //         //     ease: 'power2',
    //         //     scrollTrigger: {
    //         //         trigger: paraRef.current,
    //         //         start: 'top 50%',
    //         //         end: 'bottom 50%',
    //         //         markers: true,
    //         //         scrub: true,
    //         //     }
    //         // });

    //         ScrollTrigger.refresh();

    //     }, paraRef)

    //     return () => ctx.revert();

    // }, [])

    useEffect(() => {

        let ctx = gsap.context(() => {
            let clutter = '';
            // console.log(paraRef.current.textContent.split(' '));
            paraRef.current.textContent.split('').forEach((char) => {
                // clutter += `<span> ${char} </span>`
                clutter += `<span>${char}</span>`
            })
            paraRef.current.innerHTML = clutter;

            gsap.to(paraRef.current.querySelectorAll('span'), {
                color: 'black',
                stagger: 0.5,
                duration: 1,
                ease: 'power2',
                scrollTrigger: {
                    trigger: paraRef.current,
                    start: 'top 50%',
                    end: 'bottom 70%',
                    // markers: true,
                    scrub: true,
                }
            });

            ScrollTrigger.refresh();

        }, paraRef)

        return () => ctx.revert();

    }, [])

    return (
        <>
            <section className='mt-[15%] w-full h-full px-[5vw]' data-scroll-section>
                <div className="">
                    <h3 className='font-bold mb-2 font_syncopate text_gray'>ABOUT</h3>
                    <p ref={paraRef} id='about__para' className={`text-7xl mt-10 leading-[1.15] text-[#b5b3b369]`}>
                        Flirty Flowers is a blog about
                        flowers and the floral designers
                        who make them into art. Creativity
                        and the art of 'making' require
                        dialogue. The full purpose of the
                        Flirty Flowers blog is to encourage
                        and inspire. We value art, we value
                        insight, and we value opinion.
                    </p>
                </div>
            </section>
        </>
    )
}

export default About