import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="flex items-center justify-between py-12 font_syncopate uppercase relative px-[5vw]" data-scroll-section>
                <div><h1 className='font_syncopate text-2xl font-bold'>menu</h1></div>
                <div><h1 className='font_syncopate text-2xl font-bold'>flirty flowers</h1></div>
                <div><h1 className='font_syncopate text-2xl font-bold'>cart</h1></div>
            </nav>
        </>
    )
}

export default Navbar