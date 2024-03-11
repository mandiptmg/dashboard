'use client'
import { usePathname } from 'next/navigation'
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from 'react-icons/md'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div
      className={
        'flex relative  justify-between w-full bg-gray-800 p-4 my-3 rounded-lg  items-center'
      }
    >
      <div className={'text-lg capitalize font-semibold'}>
        {pathname.split('/').pop()}
      </div>
      <div className={'flex items-center gap-4'}>
        <div className={'flex items-center bg-gray-600 p-2 rounded-lg gap-1'}>
          <MdSearch />
          <input
            type='text'
            placeholder='Search...'
            className={'bg-transparent focus:outline-none pl-3'}
          />
        </div>
        <div className={'flex items-center gap-4'}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
