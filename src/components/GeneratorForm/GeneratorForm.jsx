
import { React, useState } from 'react'
import ButtonGenerator from '../ButtonGenerate/ButtonGenerate'
import InputHeader from '../InputHeader/InputHeader'

export default function GeneratorForm () {
  const [numberCharacter, setNumberCharacter] = useState(4)
  const [mouseState, setMouseState] = useState(null)
  const handleRange = (e) => {
    setNumberCharacter(e.target.value)
  }

  return (
    <>
      <div className='flex flex-col p-6 items-center my-4 px-20 bg-gray-800 rounded-lg'>
        <h2 className='text-4xl font-sans text-purple-700 my-6'>Password Generator</h2>
        <form className='flex flex-col w-100'>
          <InputHeader />
          <div className='flex flex-row mt-10 justify-between px-2'>
            <h5>Character Length</h5>
            <span className='text-purple-600 text-2xl'>{numberCharacter}</span>
          </div>
          <div className='slider mt-10'>
            <input
              type='range' className='w-full text-purple-600' value={numberCharacter} min='4' max='16' step='1' onChange={handleRange} onMouseDown={() => setMouseState('down')}
              onMouseUp={() => setMouseState('up')}
            />
          </div>
          <div className='options flex flex-col gap-6 mt-10'>
            <div className='flex flex-row'>
              <input type='checkbox' value='' />
              <label className='ml-4 text-lg'>Include Uppercase letters</label>
            </div>
            <div className='flex flex-row'>
              <input type='checkbox' value='' />
              <label className='ml-4 text-lg'>Include Lowercase letters</label>
            </div>
            <div className='flex flex-row'>
              <input type='checkbox' value='' />
              <label className='ml-4 text-lg'>Include Numbers</label>
            </div>
            <div className='flex flex-row'>
              <input type='checkbox' value='' />
              <label className='ml-4 text-lg'>Include Symbols</label>
            </div>
          </div>
          <div className='flex flex-row progress-bar justify-between mt-10'>
            <h2>STRENGTH</h2>
            <div className='progress-bar w-1/2 border-2 border-purple-600 rounded-sm'>
              <div className='bar w-10 h-full bg-green-400 rounded-sm text-lg text-purple-700'>
                <span>10%</span>
              </div>
            </div>
          </div>
          <ButtonGenerator />
        </form>
      </div>
    </>
  )
}
