'use client'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'

const PaginationPage = ({ count }) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()
  const page = searchParams.get('page') || 1
  const params = new URLSearchParams(searchParams)
  const ITEM_PER_PAGE = 2
  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count

  const handleChangePage = (type) => {
    type === 'prev'
      ? params.set('page', parseInt(page) - 1)
      : params.set('page', parseInt(page) + 1)
    replace(`${pathname}?${params}`)
  }
  return (
    <div className={'w-full justify-between flex items-center'}>
      <button
        className={'p-2 rounded-md bg-white disabled:bg-gray-400 text-black'}
        disabled={!hasPrev}
        onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className={'p-2 rounded-md bg-white disabled:bg-gray-400 text-black'}
        disabled={!hasNext}
        onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  )
}

export default PaginationPage
