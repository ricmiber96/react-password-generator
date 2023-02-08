
import { React } from 'react'
import { IoIosCopy } from 'react-icons/io'
import { useSelector } from 'react-redux'

export default function InputHeader () {
  const passwordText = useSelector(state => state.password.text)
  return (
    <>
      <div className='input-header flex flex-row'>
        <div className='relative block'>
          <input type='text' className='w-full p-8 bg-gray-700 rounded-md text-4xl' placeholder='Password' defaultValue={passwordText} />
          <button className='absolute z-20 inset-y-0 right-0 flex items-center p-6 text-purple-600 hover:text-white cursor-pointer'><IoIosCopy size={30} /></button>
        </div>
      </div>
    </>
  )
}
