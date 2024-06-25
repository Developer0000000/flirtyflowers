import React, { useEffect, useRef, useState } from 'react';
import GalleryItem from './GalleryItem.jsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Horizontal = () => {

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

    const [activeImage, setActiveImage] = useState(1);
    const refGallery = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            let cont = document.querySelector('.gallery')
            const sections = gsap.utils.toArray('.gallery__item__container');
            gsap.to(sections, {
                x: () => -1 * (cont.scrollWidth - innerWidth),
                ease: "none",
                scrollTrigger: {
                    trigger: ".gallery",
                    pin: true,
                    start: "top top",
                    scrub: 1,
                    markers: true,
                    end: () => "+=" + (cont.scrollWidth - innerWidth),
                    onUpdate: (self) => {
                        console.log(self.progress)
                    }
                }
            });

            // gsap.to(sections, {
            //     xPercent: -100 * (sections.length - 1),
            //     scrollTrigger: {
            //         trigger: refGallery.current,
            //         start: 'top top',
            //         scroll: 'main',
            //         markers: true,
            //         pin: true,
            //         scrub: true,
            //         snap: 1 / (sections.length - 1),
            //         end: () => `+=${refGallery.current.offsetWidth}`,
            //     }
            // })

            ScrollTrigger.refresh();
        }, refGallery);

        return () => ctx.revert();
    }, []);

    return (
        <>
            <section data-scroll-section className='gallery_wrap h-[110vh] overflow-hidden bg-[#D53F41] -mx-[5vw] pl-[5vw] relative'>
                <div ref={refGallery} className="gallery w-[400%] h-full">
                    <div className="gallery-counter absolute top-[18%] z-10">
                        <span className='text_gray_2 font_bai_jamjuree mix_blend_mode'>{activeImage}</span>
                        <span className="divider" />
                        <span className='text_gray_2 font_bai_jamjuree mix_blend_mode'>{images.length}</span>
                    </div>
                    <div className='flex items-center h-full'>
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
        </>
    );
}

export default Horizontal;

