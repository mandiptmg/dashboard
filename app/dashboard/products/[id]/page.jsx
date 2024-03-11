import Image from 'next/image'
import avatar from '../../../../public/noavatar.png'
const SingleProductPage = () => {
  return (
    <div className='w-full relative grid grid-cols-[1fr,1.5fr] items-start gap-8  bg-gray-800/50 p-6'>
      <div className='sticky top-0'>
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
            <label htmlFor='title' className='capitalize font-semibold block'>
              title
            </label>
            <input
              type='text'
              id='title'
              placeholder='Enter your title'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='price' className='capitalize font-semibold block'>
              Email
            </label>
            <input
              type='number'
              id='price'
              placeholder='Enter your price'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='stock' className='capitalize font-semibold block'>
              stock
            </label>
            <input
              type='number'
              id='stock'
              placeholder='Enter your stock'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='color' className='capitalize font-semibold block'>
              color
            </label>
            <input
              type='text'
              id='color'
              placeholder='Enter your color'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label htmlFor='size' className='capitalize font-semibold block'>
              Size
            </label>
            <input
              type='text'
              id='size'
              placeholder='Enter your size'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
              required
            />
          </div>
          <div className='w-full'>
            <label
              htmlFor='category'
              className='capitalize font-semibold block'
            >
              category
            </label>
            <select
              id='category'
              name='category'
              className='w-full p-2 bg-gray-700/55 border border-gray-800'
            >
              <option value='kitchen'>Kitchen</option>
              <option value='computers'>Computers</option>
            </select>
          </div>
          <div className='w-full'>
            <label
              htmlFor='description'
              className='capitalize font-semibold block'
            >
              description
            </label>
            <textarea
              name='desc'
              id='desc'
              rows='10'
              placeholder='Enter your description'
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

export default SingleProductPage
