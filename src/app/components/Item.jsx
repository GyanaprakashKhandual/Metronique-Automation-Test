import React from 'react'

function Item(props) {
  return (
    <div className='w-full max-w-xs bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      <div className='relative pb-[100%] overflow-hidden'>
        <img 
          src={props.image} 
          alt="Product Image" 
          className='absolute h-full w-full object-cover hover:scale-105 transition-transform duration-300'
        />
      </div>
      
      <div className='p-4'>
        <p className='text-gray-800 font-medium text-lg mb-2 line-clamp-2'>{props.name}</p>
        
        <div className='flex items-center gap-3'>
          <div className='text-gray-900 font-bold text-xl'>
            ${props.new_price}
          </div>
          {props.old_price && (
            <div className='text-gray-400 line-through text-sm'>
              ${props.old_price}
            </div>
          )}
        </div>

        {props.old_price && (
          <div className='mt-1'>
            <span className='bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded'>
              {Math.round((1 - props.new_price/props.old_price) * 100)}% OFF
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Item;