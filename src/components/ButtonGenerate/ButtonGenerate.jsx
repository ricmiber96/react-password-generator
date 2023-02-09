
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generatePassword, resetPassword } from '../../reducers/filtersReducer'

export default function ButtonGenerator () {
  const dispatch = useDispatch()
  const passwordText = useSelector(state => state.password.text)
  const size = useSelector(state => state.password.size)
  const options = useSelector(state => state.password.options)

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(resetPassword(''))
    dispatch(generatePassword(passwordText, size, options))
  }
  return (
    <>
      <button
        className='w-100 h-32 text-4xl p-4 rounded-lg hover:bg-gradient-to-r from-pink-600 to-purple-700  border-purple-600 bg-transparent hover:text-white text-purple-600 border-2 hover:border-0 mt-10'
        onClick={handleClick}
      >GENERATE
      </button>
    </>
  )
}
