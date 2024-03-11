import { User } from './model'
import { ConnectDB } from './mongodb'

export const fetchUsers = async () => {
  try {
    ConnectDB()
    const users = await User.find()
    return users;
  } catch (error) {
    console.log('failed to connected fetch users', error)
    throw new Error('failed to connected with fetch users')
  }
}

// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: 'Total Users',
    number: 10.928,
    change: 12,
  },
  {
    id: 2,
    title: 'Stock',
    number: 8.236,
    change: -2,
  },
  {
    id: 3,
    title: 'Revenue',
    number: 6.642,
    change: 18,
  },
]
