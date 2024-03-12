import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dasboard/search/search'
import PaginationPage from '@/app/ui/dasboard/pagination/pagination'
import { fetchUsers } from '@/app/lib/data'
import { deleteUser } from '@/app/lib/actions'

const UserPage = async ({ searchParams }) => {
  const q = searchParams?.q || ''
  const page = searchParams?.page || 1
  const { users, count } = await fetchUsers(q, page)
  return (
    <div className='w-full space-y-4 rounded-lg p-4 bg-gray-800'>
      <div className='flex items-center justify-between'>
        <div className='inline-flex'>
          <Search placeholder={'search for users...'} />
        </div>
        <Link className='inline-flex' href={'/dashboard/users/add'}>
          <button className='p-1 bg-violet-500 rounded-md text-sm font-light '>
            Add New
          </button>
        </Link>
      </div>
      <div>
        <table className='w-full'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className='text-gray-300  text-sm'>
            {users.map((user) => (
              <tr key={user.id}>
                <td className='flex items-center py-4 gap-2'>
                  <Image
                    src={user.img || '/noavatar.png'}
                    className='rounded-full w-[40px] h-[40px] aspect-square object-cover object-top'
                    alt=''
                    width={40}
                    height={40}
                  />{' '}
                  <span className='text-sm text-white font-semibold md:text-base capitalize'>
                    {user.username}
                  </span>
                </td>
                <td>{user.email}</td>
                <td>oct 1, 2022</td>
                <td>{user.isAdmin ? 'admin' : 'client'}</td>
                <td>{user.isActive ? 'active' : 'passive'}</td>
                <td>
                  <div className='flex items-center gap-2'>
                    <Link href={`/dashboard/users/${user.id}`}>
                      <button className='bg-teal-600/55 hover:bg-teal-700 rounded-md text-sm px-2 p-1'>
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type='hidden' name='id' value={user.id} />
                      <button className='bg-red-600/55 hover:bg-red-700 rounded-md text-sm p-1 px-2'>
                        Delete
                      </button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className=''>
        <PaginationPage count={count} />
      </div>
    </div>
  )
}

export default UserPage
