'use client'

import { motion } from 'framer-motion'
import { FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Men', href: '/men' },
    { name: 'Women', href: '/women' },
    { name: 'Kids', href: '/kids' },
  ]

  const mobileNavVariants = {
    open: { 
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: { 
      opacity: 0,
      x: '100%',
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  }

  const itemVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    },
    closed: { 
      opacity: 0,
      y: 20,
      transition: { duration: 0.2 }
    }
  }

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Brand and mobile menu button */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              FashionHub
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:ml-8 md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center space-x-4">
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
                <span className="sr-only">Account</span>
                <FiUser className="h-6 w-6" />
              </button>
              
              <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none relative">
                <span className="sr-only">Cart</span>
                <FiShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
              
              {/* Mobile menu button */}
              <button 
                className="md:hidden p-1 rounded-full text-gray-500 hover:text-gray-700 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className="sr-only">Open menu</span>
                {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileNavVariants}
        className="md:hidden fixed inset-0 bg-white z-40 pt-16"
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          
          <motion.div variants={itemVariants} className="pt-4 border-t border-gray-200">
            <Link
              href="/login"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar;