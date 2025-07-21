'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const images = [
    'https://picsum.photos/id/10/1600/900',
    'https://picsum.photos/id/11/1600/900',
    'https://picsum.photos/id/12/1600/900',
    'https://picsum.photos/id/13/1600/900',
    'https://picsum.photos/id/14/1600/900',
    'https://picsum.photos/id/15/1600/900'
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative w-full h-[300px] overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10" />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={images[currentIndex]}
            alt={`Hero image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold text-white mb-2"
        >
          Discover Your Style
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm md:text-lg text-white mb-4 max-w-md"
        >
          Explore our latest collection
        </motion.p>
        
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.4 }}
        >
          <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors duration-300">
            Shop Now
          </button>
        </motion.div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white w-4' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection