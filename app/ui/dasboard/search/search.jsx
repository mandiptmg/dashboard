import { MdSearch } from 'react-icons/md'
const Search = ({ placeholder }) => {
  return (
    <div className={'flex items-center bg-gray-600 p-2 rounded-lg gap-1'}>
      <MdSearch />
      <input
        type='text'
        placeholder={placeholder}
        className={'bg-transparent focus:outline-none pl-3'}
      />
    </div>
  )
}

export default Search
