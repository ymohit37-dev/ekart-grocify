import React from 'react'
import Grocery from '../../assets/grocery.png'
import Button from '../Button/Button'


const Hero = () => {
  return (
   <section >
    <div className='min-h-screen max-w-[1400px] mx-auto px-10 flex md:flex-row flex-col items-center md:pt-20 pt-[8rem] gap-x-10 gap-y-10 '>

        {/* hero content */}
        <div  className='flex-1'>
            <span className='bg-orange-100 text-orange-500 text-lg px-5 py-2 rounded-full'>Export Best Quality..</span>

            <h1 className='md:text-7xl text-5xl/14 font-bold mt-5'>Tasty Organic <span className='text-orange-500'>Fruits</span> & <span className='text-orange-500'>Veggies </span> <br /> In Your City</h1>

            <p className=' max-w-[530px] text-zinc-600 text-lg mt-3 '>
                Bread for a high content of beneficial substances. Our products are all fresh and healthy.
            </p>

            <Button content="Shop Now" />

        </div>

        {/* hero image */}
        <div className='flex-1'>
            <img src={Grocery} alt="" loading='lazy' />
        </div>

    </div>

   </section>
  )
}

export default Hero
