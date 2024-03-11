import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'
const Rightbar = () => {
  return (
    <div className='w-full space-y-4'>
      <div className='p-4 relative rounded-lg bg-gray-800 text-sm'>
        <div className={'absolute bottom-2 right-4'}>
          <Image
            className={'w-28 h-28 aspect-square object-contain opacity-55 '}
            src='/astronaut.png'
            alt=''
            width={50}
            height={50}
          />
        </div>
        <div className={'space-y-4'}>
          <span className={'text-base font-semibold'}>🔥 Available Now</span>
          <h3 className={'text-lg font-semibold'}>
            How to use the new version of the admin dashboard?
          </h3>
          <h4 className={'text-gray-400'}>Takes 4 minutes to learn</h4>
          <p className={'text-gray-400'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button
            className={
              'flex items-center gap-1 p-1 text-base hover:bg-violet-600 bg-violet-500 rounded-lg'
            }
          >
            <MdPlayCircleFilled size={20} />
            Watch
          </button>
        </div>
      </div>
      <div className='p-4 relative rounded-lg bg-gray-800 text-sm'>
        <div className={'space-y-4'}>
          <span className={'text-base font-semibold'}>🚀 Coming Soon</span>
          <h3 className={'text-lg font-semibold'}>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <h4 className={'text-gray-400'}>Boost your productivity</h4>
          <p className={'text-gray-400'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button
            className={
              'flex items-center gap-1 p-1 text-base hover:bg-violet-600 bg-violet-500 rounded-lg'
            }
          >
            <MdReadMore size={20} />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar
