const AddUser = () => {
  return (
    <div className='w-full bg-gray-800/50 p-6'>
      <form>
        <div className='grid md:grid-cols-2 w-full  gap-2'>
          <div className='w-full'>
            <input
              type='text'
              placeholder='username'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
              required
            />
          </div>
          <div className='w-full'>
            <input
              type='password'
              placeholder='password'
              className='w-full p-2 placeholder:capitalize placeholder:pl-2  bg-gray-700/55 border border-gray-800 '
              required
            />
          </div>
          <div className='w-full'>
            <select
              name='isAdmin'
              id='isAdmin'
              className='w-full  p-2  bg-gray-700/55 border border-gray-800'
            >
              <option value={false}>Is Admin?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          <div className='w-full'>
            <select
              name='isActive'
              id='isActive'
              className='w-full  p-2  bg-gray-700/55 border border-gray-800'
            >
              <option value={true}>Is Active?</option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
        </div>
        <div className='w-full'>
          <textarea
            name='address'
            id='address'
            placeholder='address'
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

export default AddUser
