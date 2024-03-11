import { MdSupervisedUserCircle } from 'react-icons/md'
const Card = ({ item }) => {
  return (
    <div className='rounded-lg p-3 flex items-start gap-1 bg-gray-800'>
      <MdSupervisedUserCircle size={20} />
      <div className='flex flex-col gap-3'>
        <span>{item.title}</span>
        <span>{item.number}</span>
        <span className={` text-xs`}>
          <span
            className={item.change > 0 ? 'text-green-500' : ' text-red-500'}
          >
            {item.change}%
          </span>
          &nbsp;{item.change > 0 ? 'more' : 'less'} than previous week
        </span>
      </div>
    </div>
  )
}

export default Card
