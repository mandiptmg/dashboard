import Image from 'next/image'
const Transaction = () => {
  return (
    <div className='w-full my-4 rounded-lg p-4 bg-gray-800 '>
      <div className='space-y-4'>
        <h1 className='text-gray-400 font-normal text-lg md:text-xl'>
          Latest Transactions
        </h1>
        <table className='w-full'>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
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
              <td>
                <span className='bg-yellow-500/50 p-1 rounded-md '>
                  {' '}
                  pending
                </span>
              </td>
              <td>14.0.2024</td>
              <td>$ 3.200</td>
            </tr>
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
                  monk doe
                </span>
              </td>
              <td>
                <span className='bg-red-500/50 p-1 rounded-md '>
                  {' '}
                  cancelled
                </span>
              </td>
              <td>14.0.2024</td>
              <td>$ 3.200</td>
            </tr>
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
                  ponk doe
                </span>
              </td>
              <td>
                <span className='bg-violet-300/50 p-1 rounded-md '> done</span>
              </td>
              <td>14.0.2024</td>
              <td>$ 3.200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transaction
