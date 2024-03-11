const AddProduct = () => {
  return (
    <div className='w-full bg-gray-800/50 p-6'>
      <form>
        <div className='grid md:grid-cols-2 w-full  gap-2'>
          <div className='w-full'>
            <input
              type='text'
              placeholder='title'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
              required
            />
          </div>
          <div className='w-full'>
            <select
              name='item'
              id='item'
              className='w-full  p-2  bg-gray-700/55 border border-gray-800'
            >
              <option className='text-black' value='general'>
                Choose a category
              </option>
              <option className='text-black' value='Iphone'>
                Iphone
              </option>
              <option className='text-black' value='Computer'>
                Computer
              </option>
              <option className='text-black' value='Laptop'>
                Laptop
              </option>
            </select>
          </div>
          <div className='w-full'>
            <input
              type='number'
              placeholder='price'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
              required
            />
          </div>
          <div className='w-full'>
            <input
              type='number'
              placeholder='stock'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
              required
            />
          </div>
          <div className='w-full'>
            <input
              type='text'
              placeholder='color'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
            />
          </div>
          <div className='w-full'>
            <input
              type='text'
              placeholder='size'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
            />
          </div>
        </div>
        <div className='w-full'>
          <textarea
            name='item'
            id='item'
            placeholder='description...'
            rows='10'
            className='w-full mt-2 p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800'
          />
        </div>
        <button
          type='submit'
          className='w-full  text-xl font-medium bg-teal-500/55 rounded-md py-2'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default AddProduct
