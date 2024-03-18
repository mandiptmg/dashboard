'use client'

import { authenticate } from '../lib/actions'
import { useFormState } from 'react-dom'

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, undefined)

  return (
    <div className='h-screen w-full grid place-items-center '>
      <div className='p-6 w-full max-w-md bg-gray-200 border rounded-lg shadow-lg mx-auto'>
        <form action={formAction} className='space-y-4 grid gap-4 w-full'>
          <h2 className='text-2xl font-bold mb-4'>Log In</h2>

          <input
            type='email'
            placeholder='email'
            className='w-full border border-gray-300 rounded px-3 py-2'
            name='email'
          />

          <input
            type='password'
            placeholder='password'
            className='w-full border border-gray-300 rounded px-3 py-2'
            name='password'
          />
          <button className='w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600'>
            Login
          </button>
          {state && state}
        </form>
      </div>
    </div>
  )
}

export default LoginForm
