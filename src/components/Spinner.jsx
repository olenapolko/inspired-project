import React from 'react';
import { RotatingLines } from 'react-loader-spinner'

const Spinner = ({message}) => {
  return (
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <RotatingLines
              strokeColor="#00D9E3"
              strokeWidth="4"
              animationDuration="0.75"
              width="65"
              visible={true}
          />
          <p className='text-lg text-center px-2'>{message}</p>
    </div>
  )
}

export default Spinner
