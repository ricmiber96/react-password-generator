
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generatePassword, resetPassword } from '../../reducers/filtersReducer'

export default function ButtonGenerator () {
  const dispatch = useDispatch()
  const passwordText = useSelector(state => state.password.text)
  const size = useSelector(state => state.password.size)

  const handleClick = (e) => {
    e.preventDefault()
    console.log(passwordText)
    dispatch(resetPassword(''))
    dispatch(generatePassword(passwordText, size))
  }
  return (
    <>
      <button
        className='w-100 h-32 text-4xl p-4 rounded-lg bg-purple-600 hover:border-purple-600 hover:bg-transparent hover:text-purple-600 hover:border-2 mt-10'
        onClick={handleClick}
      >GENERATE
      </button>
    </>
  )
}
