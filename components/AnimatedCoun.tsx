'use client'
import React from 'react'
import CountUp from 'react-countup';
const AnimatedCoun = ({amount}:{amount:number}) => {
  return (
    <div className='w-full'>
      <CountUp 
      decimal='.'
      decimals={2}
      prefix='$'
      end={amount} />
    </div>
  )
}

export default AnimatedCoun
