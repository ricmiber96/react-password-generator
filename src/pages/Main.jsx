import { React, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import GeneratorForm from '../components/GeneratorForm/GeneratorForm'
import 'react-toastify/dist/ReactToastify.css'

export default function Main () {
  return (
    <>
      <div className='container max-w-7xl flex flex-col my-8 mx-auto items-center rounded-md'>
        <GeneratorForm />
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </div>
    </>
  )
}
