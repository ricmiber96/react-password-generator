
import { React } from 'react'
import { IoIosCopy } from 'react-icons/io'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

export default function InputHeader () {
  const passwordText = useSelector(state => state.password.text)
  const handleCopyPassword = (e) => {
    e.preventDefault()
    navigator.clipboard.writeText(passwordText)
    toast.success('Password copied to clipboard ', {
      position: 'bottom-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark'
    })
  }
  return (
    <>
      <div className='input-header flex flex-row'>
        <div className='relative block'>
          <input type='text' className='w-full p-8 bg-gray-700 rounded-md text-4xl' placeholder='Password' defaultValue={passwordText} />
          <button
            className='absolute z-20 inset-y-0 right-0 flex items-center p-6 text-purple-600 hover:text-white cursor-pointer'
            onClick={handleCopyPassword}
          ><IoIosCopy size={30} />
          </button>
        </div>
      </div>
    </>
  )
}
