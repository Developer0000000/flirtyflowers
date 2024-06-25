import React, { useEffect } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import SplitText from '../utils/splitText'

const Header = () => {

    useEffect(() => {

        (() => {

            const split = new SplitText('#header__title', {
                type: 'lines',
                linesClass: 'lineChildren'
            });

            const splitParent = new SplitText('#header__title', {
                type: 'lines',
                linesClass: 'lineParent'
            });

            gsap.to(split.lines, {
                duration: 1,
                y: 0,
                opacity: 1,
                stagger: 0.2,
                ease: 'power2'
            });

        })()

    }, [])

    return (
        <>
            <section data-scroll-section className='uppercase relative min-h-screen h-full px-[5vw]'>
                <ul className='absolute left-0 top-[16%] pl-[5vw]'>
                    <li className='text_gray tracking-wide font-semibold font_syncopate leading-7'>intro</li>
                    <li className='text_gray tracking-wide font-semibold font_syncopate leading-7'>about</li>
                    <li className='text_gray tracking-wide font-semibold font_syncopate leading-7'>featured</li>
                </ul>
                <div className='absolute top-[15%] left-1/2 -translate-x-1/2'>
                    <h1 id='header__title' className='text-[#222222] text-center font-bold font_bai_jamjuree text-[20vw] leading-[20vw]'>art objects</h1>
                </div>
            </section>
        </>
    )
}

export default Header