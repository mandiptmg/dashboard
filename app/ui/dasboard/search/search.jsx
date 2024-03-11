'use client'
import { MdSearch } from 'react-icons/md'
import { useDebouncedCallback } from 'use-debounce'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
const Search = ({ placeholder }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const handleChange = useDebouncedCallback((e) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', '1')
    if (e.target.value) {
      e.target.value.length > 2 && params.set('q', e.target.value)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params}`)
  }, 300)
  return (
    <div className={'flex items-center bg-gray-600 p-2 rounded-lg gap-1'}>
      <MdSearch />
      <input
        type='text'
        placeholder={placeholder}
        className={'bg-transparent focus:outline-none pl-3'}
        onChange={handleChange}
      />
    </div>
  )
}

export default Search
