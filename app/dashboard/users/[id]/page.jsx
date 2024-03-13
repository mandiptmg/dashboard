import Image from 'next/image'
import avatar from '../../../../public/noavatar.png'
import { fetchUser } from '@/app/lib/data'
import { updateUser } from '@/app/lib/actions'

const SingleUserPage = async ({ params }) => {
  const { id } = params
  const user = await fetchUser(id)
  console.log(user)
  return (
    <div className='w-full grid grid-cols-[1fr,1.5fr] items-start gap-8  bg-gray-800/50 p-6'>
      <div>
        <Image
          src={user.img || avatar}
          alt=''
          width={250}
          height={250}
          className='w-full h-[400px] rounded-md object-cover aspect-square  object-top'
        />
        <h1 className='capitalize font-semibold text-lg mt-3'>
          {user.username}
        </h1>
      </div>
      <form action={updateUser}>
        <input type='hidden' name='id' value={user._id} />
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
              name='username'
              placeholder={user.username || 'Enter your username'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='email' className='capitalize font-semibold block'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder={user.email || 'Enter your email'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
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
              name='password'
              placeholder='Enter your password'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='phone' className='capitalize font-semibold block'>
              Phone No.
            </label>
            <input
              type='tel'
              id='phone'
              name='phone'
              placeholder={user.phone || 'Enter your phone number'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
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
              <option value={false} selected={!user.isAdmin}>
                No
              </option>
              <option value={true} selected={user.isAdmin}>
                Yes
              </option>
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
              <option value={false} selected={!user.isActive}>
                No
              </option>
              <option value={true} selected={user.isActive}>
                Yes
              </option>
            </select>
          </div>
          <div className='w-full'>
            <label htmlFor='address' className='capitalize font-semibold block'>
              Address
            </label>
            <input
              type='text'
              name='address'
              id='address'
              placeholder={user.address || 'Enter your address'}
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
