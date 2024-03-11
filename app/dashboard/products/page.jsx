import Link from 'next/link'
import Image from 'next/image'
import Search from '@/app/ui/dasboard/search/search'
import PaginationPage from '@/app/ui/dasboard/pagination/pagination'

const ProductPage = () => {
  return (
    <div className='w-full space-y-4 rounded-lg p-4 bg-gray-800'>
      <div className='flex items-center justify-between'>
        <div className='inline-flex'>
          <Search placeholder={'search for users...'} />
        </div>
        <Link className='inline-flex' href={'/dashboard/products/add'}>
          <button className='p-1 bg-violet-500 rounded-md text-sm font-light '>
            Add New
          </button>
        </Link>
      </div>
      <div>
        <table className='w-full'>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody className='text-gray-300  text-sm'>
            <tr>
              <td className='flex items-center py-4 gap-2'>
                <Image
                  src='/noavatar.png'
                  className='rounded-full'
                  alt=''
                  width={40}
                  height={40}
                />{' '}
                <span className='text-sm text-white font-semibold md:text-base capitalize'>
                  jhon doe
                </span>
              </td>
              <td className=''>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit...
              </td>
              <td>$ 200</td>
              <td>oct 1, 2023</td>
              <td>5</td>
              <td>
                <div className='flex items-center gap-2'>
                  <Link href={'/dashboard/products/1'}>
                    <button className='bg-teal-600/55 hover:bg-teal-700 rounded-md text-sm px-2 p-1'>
                      View
                    </button>
                  </Link>
                  <button className='bg-red-600/55 hover:bg-red-700 rounded-md text-sm p-1 px-2'>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className=''>
        <PaginationPage />
      </div>
    </div>
  )
}

export default ProductPage
