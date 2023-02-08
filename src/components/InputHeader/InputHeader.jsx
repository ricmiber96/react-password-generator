
import { React } from 'react'
import { IoIosCopy } from 'react-icons/io'

export default function InputHeader () {
  return (
    <>
      <div className='input-header flex flex-row'>
        <div className='relative block'>
          <input type='text' className='w-full p-8 bg-gray-700 rounded-md text-4xl' placeholder='Password' />
          <button className='absolute z-20 inset-y-0 right-0 flex items-center p-6 text-purple-600 hover:text-white cursor-pointer'><IoIosCopy size={30} /></button>
        </div>
      </div>
    </>
  )
}
