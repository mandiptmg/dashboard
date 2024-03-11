const PaginationPage = () => {
  return (
    <div className={'w-full justify-between flex items-center'}>
      <button
        className={'p-2 rounded-md bg-white text-black'}
        // disabled={!hasPrev}
        // onClick={() => handleChangePage('prev')}
      >
        Previous
      </button>
      <button
        className={'p-2 rounded-md bg-white text-black'}
        // disabled={!hasNext}
        // onClick={() => handleChangePage('next')}
      >
        Next
      </button>
    </div>
  )
}

export default PaginationPage
