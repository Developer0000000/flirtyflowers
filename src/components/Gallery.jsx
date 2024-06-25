import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryItem from './GalleryItem';

gsap.registerPlugin(ScrollTrigger);

const images = [
    {
        src: "https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100",
        title: "Dracaena Trifasciata",
        subtitle: "Live the Beauty",
        category: "Shooting / Adv.Campaing",
    },
    {
        src: "https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100",
        title: "Cereus Penuvianus",
        subtitle: "Live the Beauty",
        category: "Shooting / Adv.Campaing",
    },
    {
        src: "https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100",
        title: "Calliope",
        subtitle: "Live the Beauty",
        category: "Shooting / Adv.Campaing",
    },
    {
        src: "https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100",
        title: "Golden Pothos",
        subtitle: "Living Room",
        category: "Shooting / Adv.Campaing",
    },
];

const Gallery = () => {

    const [activeImage, setActiveImage] = useState(1);

    useEffect(() => {

        gsap.to('.gallery__item__container', {
            xPercent: -100 * (document.querySelectorAll('.gallery__item__container').length - 1),
            // ease: 'none',
            scrollTrigger: {
                trigger: '.horizontal-scroll-container',
                // start: 'top 0',
                pin: true,
                scrub: 3,
                snap: 1 / (images.length - 1),
                end: () => `+=${document.querySelector('.gallery__item__container').offsetWidth}`,
            },
        });

    }, []);

    return (
        <section className="horizontal-scroll-container flex visible relative overflow-hidden h-screen bg-[#D53F41]">
            <div className="">
                <div className="gallery-counter absolute top-[5%] left-2 z-10">
                    <span className='text_gray_2 font_bai_jamjuree mix_blend_mode'>{activeImage}</span>
                    <span className="divider" />
                    <span className='text_gray_2 font_bai_jamjuree mix_blend_mode'>{images.length}</span>
                </div>
                <div className='flex items-center h-full pb-14'>
                    {images.map((image, index) => (
                        <GalleryItem
                            index={index}
                            key={index}
                            {...image}
                            updateActiveImage={index => setActiveImage(index + 1)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;