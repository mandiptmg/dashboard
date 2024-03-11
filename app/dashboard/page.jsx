import { cards } from '../lib/data'
import Card from '../ui/dasboard/card/card'
import Chart from '../ui/dasboard/chart/chart'
import Rightbar from '../ui/dasboard/rightbar/rightbar'
import Transaction from '../ui/dasboard/transaction/transaction'

const page = () => {
  return (
    <div className='flex items-start gap-4'>
      <div className='w-full'>
        <div className='md:grid-cols-3  grid gap-2 '>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <div>
          <Transaction />
        </div>
        <div>
          <Chart />
        </div>
      </div>
      <div className='max-w-xs sticky top-0 mx-auto'>
        <Rightbar />
      </div>
    </div>
  )
}

export default page