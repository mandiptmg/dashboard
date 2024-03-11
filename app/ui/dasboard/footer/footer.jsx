'use client'
const Footer = () => {
  return (
    <div className='mt-4 w-full bg-gray-800  p-4'>
      <div className='w-full justify-between items-center flex'>
        <div className='text-gray-400 font-thin text-sm tracking-wide leading-6'>
          Mandip Tamang
        </div>
        <div className='text-gray-400 font-thin text-sm tracking-wide leading-6'>
          &copy;{new Date().getFullYear} .all right reserved.
        </div>
      </div>
    </div>
  )
}

export default Footer
