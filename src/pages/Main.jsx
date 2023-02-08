import { React, useState } from 'react'
import GeneratorForm from '../components/GeneratorForm/GeneratorForm'

export default function Main () {
  return (
    <>
      <div className='container max-w-7xl flex flex-col my-8 mx-auto items-center rounded-md'>
        <GeneratorForm />
      </div>
    </>
  )
}
