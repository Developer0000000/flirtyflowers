import React from 'react'
import Featured from './components/Featured'
import Header from './components/Header'
import Navbar from './components/Navbar'
import CustomCursor from './customCursor'
import useLocomotive from './hooks/useLocomotive'
import About from './components/About'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
// import Horizontal from './components/Horizontal/Horizontal.jsx'

const App = () => {

  useLocomotive(true);

  return (
    <>
      {/* <CustomCursor /> */}
      <main data-scroll-container>
        <Navbar />
        <Header />
        <Featured />
        <About />
        <Gallery />
        {/* <Horizontal /> */}
        <Footer />
      </main>
    </>
  )
}

export default App