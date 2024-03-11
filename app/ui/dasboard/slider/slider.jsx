import Image from 'next/image'
import MenuLink from './MenuLink'
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md'

const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />,
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />,
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: <MdWork />,
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: <MdAnalytics />,
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: <MdHelpCenter />,
      },
    ],
  },
]
const Sidebar = () => {
  return (
    <div className='w-full'>
      <div className='p-7 fixed top-0 z-10 left-0 bg-gray-800 h-screen  mx-auto max-w-[16rem] '>
        <div className={' flex items-center gap-5'}>
          <Image
            className={'rounded-full'}
            src={'/noavatar.png'}
            alt=''
            width='50'
            height='50'
          />
          <div className={'hidden lg:block'}>
            <span className={'capitalize font-semibold text-base'}>
              john doe
            </span>
            <span className={'block text-sm text-gray-300'}>Administrator</span>
          </div>
        </div>
        <ul className='my-4 space-y-2 text-base'>
          {menuItems.map((item) => (
            <li key={item.title}>
              <span className='text-gray-400 my-1'>{item.title}</span>
              {item.list.map((cat) => (
                <MenuLink item={cat} key={cat.title} />
              ))}
            </li>
          ))}
        </ul>
        <form
          action={async () => {
            'use server'
            await signOut()
          }}
        >
          <button className={'flex items-center gap-4 p-2  text-base'}>
            <MdLogout />
             <span className="lg:block hidden">
              Logout
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Sidebar
