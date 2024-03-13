import Image from 'next/image'
import avatar from '../../../../public/noavatar.png'
import { fetchProduct } from '@/app/lib/data'
import { updateProduct } from '@/app/lib/actions'


const SingleProductPage = async ({ params }) => {
   const { id } = params
   const product = await fetchProduct(id)
   console.log(product)
  return (
    <div className='w-full relative grid grid-cols-[1fr,1.5fr] items-start gap-8  bg-gray-800/50 p-6'>
      <div className='sticky top-0'>
        <Image
          src={product.img || avatar}
          alt=''
          width={250}
          height={250}
          className='w-full h-[400px] rounded-md object-cover aspect-square  object-top'
        />
        <h1 className='capitalize font-semibold text-lg mt-3'>
          {product.title}
        </h1>
      </div>
      <form action={updateProduct}>
        <input type='hidden' name='id' value={product._id} />
        <div className='w-full space-y-2'>
          <div className='w-full'>
            <label htmlFor='title' className='capitalize font-semibold block'>
              title
            </label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder={product.title || 'Enter your title'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='price' className='capitalize font-semibold block'>
              Price
            </label>
            <input
              type='number'
              id='price'
              name='price'
              placeholder={product.price || 'Enter your price'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='stock' className='capitalize font-semibold block'>
              stock
            </label>
            <input
              type='number'
              id='stock'
              name='stock'
              placeholder={product.stock || 'Enter your stock'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='color' className='capitalize font-semibold block'>
              color
            </label>
            <input
              type='text'
              id='color'
              name='color'
              placeholder={product.color || 'Enter your color'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
            />
          </div>
          <div className='w-full'>
            <label htmlFor='size' className='capitalize font-semibold block'>
              Size
            </label>
            <input
              type='text'
              id='size'
              name='size'
              placeholder={product.size || 'Enter your size'}
              className='w-full p-2 placeholder:capitalize placeholder:pl-2 bg-gray-700/55 border border-gray-800'
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
              placeholder={product.desc || 'Enter your description'}
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
