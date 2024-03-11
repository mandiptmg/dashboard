'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const MenuLink = ({ item }) => {
  const pathname = usePathname()
  return (
    <Link
      href={item.path}
      className={`hover:bg-gray-500 my-1 flex items-center p-2 rounded w-full gap-4 ${
        pathname === item.path ? 'bg-gray-500 ' : 'null'
      }`}
    >
      {item.icon}
      <span className='hidden lg:block'>{item.title}</span>
    </Link>
  )
}

export default MenuLink
