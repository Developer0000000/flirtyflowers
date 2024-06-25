import React from 'react'

const GalleryItem = ({ src, title, subtitle, category, index, updateActiveImage }) => {
    return (
        <>
            <section className="gallery__item__container w-screen h-screen relative" onMouseEnter={() => updateActiveImage(index)}>
                <div className="gallery-item">
                    <div className="gallery-item-info absolute bottom-[16%] left-6 z-10">
                        <h3 className="will-change-transform gallery__item__title text-white font_bai_jamjuree font-semibold text-[5.8vw] leading-[1.05]">{title}</h3>
                        <h5 className="will-change-transform gallery__item__subtitle text-white font_bodoni text-[5.8vw] leading-[1.05]">{subtitle}</h5>
                        <p className="will-change-transform	gallery__item__category text-white text-2xl pt-3 font_bai_jamjuree">{category}</p>
                    </div>
                    <div style={{ backgroundImage: `url(${src})` }} className="gallery__item__img will-change-transform scale-100 bg-center h-[80vh] w-[65vw] bg-cover absolute top-[19%] left-[14%] origin-center"></div>
                </div>
            </section>
        </>
    )
}

export default GalleryItem