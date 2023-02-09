
import { React, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import { lengthFilterChanged, optionsPassword } from '../../reducers/filtersReducer'
import ButtonGenerator from '../ButtonGenerate/ButtonGenerate'
import InputHeader from '../InputHeader/InputHeader'

export default function GeneratorForm () {
  const [numberCharacter, setNumberCharacter] = useState(4)
  const [mouseState, setMouseState] = useState(null)
  const dispatch = useDispatch()

  const handleRange = (e) => {
    setNumberCharacter(parseInt(e.target.value))
    dispatch(lengthFilterChanged(parseInt(e.target.value)))
  }
  const passwordStrength = useSelector(state => state.password.strength)
  const password = useSelector(state => state.password)
  const options = useSelector(state => state.password.options)
  const arrayOptions = ['uppercase', 'lowercase', 'numbers', 'symbols']
  const arrayOptionsText = ['Include Uppercase letters', 'Include Lowercase letters', 'Include Numbers', 'Include Symbols']

  return (
    <>
      <div className='flex flex-col p-6 items-center my-4 px-20 bg-gray-800 rounded-lg'>
        <h2 className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700  my-6'>Password Generator</h2>
        <form className='flex flex-col w-100'>
          <InputHeader />
          <div className='flex flex-row mt-10 justify-between px-2'>
            <h5 className='font-semibold text-xl'>Character Length</h5>
            <span className='text-purple-600 text-2xl'>{numberCharacter}</span>
          </div>
          <div className='slider mt-10'>
            <input
              type='range' className='w-full text-purple-600' value={numberCharacter} min='4' max='16' step='1' onChange={handleRange} onMouseDown={() => setMouseState('down')}
              onMouseUp={() => setMouseState('up')}
            />
          </div>
          <div className='options flex flex-col gap-6 mt-10'>
            {
                arrayOptionsText.map((option, i) => {
                  const isChecked = options.includes(arrayOptions[i])
                  const handleChange = () => {
                    const changeAction = isChecked ? 'unchecked' : 'checked'
                    dispatch(optionsPassword(arrayOptions[i], changeAction))
                  }

                  return (
                    <label className='flex flex-row' key={i}>
                      <input type='checkbox' key={i} onChange={handleChange} checked={isChecked} />
                      <label className='ml-4 text-lg font-bold'>{option}</label>
                    </label>
                  )
                })
              }
          </div>
          <div className='flex flex-row progress-bar justify-between mt-10'>
            <h2 className='font-semibold text-xl'>STRENGTH</h2>
            <div className='progress-bar w-2/3 border-2 border-purple-600 rounded-sm'>
              <div style={{ width: `${passwordStrength}%` }} className={`bar w-40 h-full ${passwordStrength >= 70 ? 'bg-red-600' : passwordStrength >= 50 ? 'bg-orange-300' : 'bg-green-400'}  rounded-sm text-center text-lg text-purple-700`}>
                {passwordStrength}%
              </div>
            </div>
          </div>
          <ButtonGenerator />
        </form>
      </div>
    </>
  )
}
