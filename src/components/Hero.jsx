import React, { useState, useEffect } from 'react'

import { motion } from 'framer-motion'

import { styles } from '../style'

import { ComputerCanvas } from './canvas/Computers'

import PC2 from '../assets/PC2.jpg'
import PC1 from '../assets/company/PC1.jpeg'


const Hero = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange)
  }, [])
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute insert-0 top-[120px] max-w-7x1 mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient ml-2 ' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi I'm <span className='text-[#915eff]'>Ishaan</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>I develop 3-D Visuals, user<br className='sm:block hidden' /> interfaces and web applications.</p>
        </div>
      </div>
      {isMobile ? <><img src={PC2} alt='' className='absolute mt-80 rounded-2xl h-[400px]' /></> :
        <>
        <img src={PC1} alt='relative' className='w-full min-h-screen'/>
        </>}
      {/* <ComputerCanvas /> */}
      <div className='absolute xs:bottom-00 bottom-1  w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero