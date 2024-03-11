import Image from 'next/image'
import avatar from '../../../../public/noavatar.png'

const SingleUserPage = () => {
  return (
    <div className='w-full grid grid-cols-[1fr,1.5fr] items-start gap-8  bg-gray-800/50 p-6'>
      <div>
        <Image
          src={avatar}
          alt=''
          className='w-full rounded-md h-full'
          width={250}
          height={250}
        />
        <h1 className='capitalize font-semibold text-lg mt-3'>john doe</h1>
      </div>
      <form>
        <div className='w-full space-y-2'>
          <div className='w-full'>
            <label
              htmlFor='username'
              className='capitalize font-semibold block'
            >
              Username
            </label>
            <input
              type='text'
              id='username'
              placeholder='Enter your username'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='capitalize font-semibold block'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='password'
              className='capitalize font-semibold block'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='phone' className='capitalize font-semibold block'>
              Phone No.
            </label>
            <input
              type='tel'
              id='phone'
              placeholder='Enter your phone number'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='isAdmin' className='capitalize font-semibold block'>
              Is Admin?
            </label>
            <select
              id='isAdmin'
              name='isAdmin'
              className='w-full p-2 bg-gray-700/55 border border-gray-800'
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
          <div className='w-full'>
            <label
              htmlFor='isActive'
              className='capitalize font-semibold block'
            >
              Is Active?
            </label>
            <select
              id='isActive'
              name='isActive'
              className='w-full p-2 bg-gray-700/55 border border-gray-800'
            >
              <option value={false}>No</option>
              <option value={true}>Yes</option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='address' className='capitalize font-semibold block'>
              Address
            </label>
            <input
              type='text'
              id='address'
              placeholder='Enter your address'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
        </div>
        <button
          type='submit'
          className='w-full mt-4 text-xl font-medium hover:bg-teal-800 bg-teal-500/55 py-2'
        >
          Update
        </button>
      </form>
    </div>
  )
}

export default SingleUserPage
