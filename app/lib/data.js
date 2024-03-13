import { Product, User } from './model'
import { ConnectDB } from './mongodb'

export const fetchUsers = async (q, page) => {
  console.log(q)
  const regex = new RegExp(q, 'i')
  const ITEM_PER_PAGE = 2
  try {
    ConnectDB()
    const count = await User.find({ username: { $regex: regex } }).count()
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE)
    return { users, count }
  } catch (error) {
    console.log('failed to connected fetch users', error)
    throw new Error('failed to connected with fetch users')
  }
}

export const fetchUser = async (id) => {
  try {
    ConnectDB()
    const user = await User.findById(id)
    return user;
  } catch (error) {
    console.log('failed to connected fetch user', error)
    throw new Error('failed to connected with fetch user')
  }
}

export const fetchProducts = async (q, page) => {
  console.log(q)
  const regex = new RegExp(q, 'i')
  const ITEM_PER_PAGE = 2
  try {
    ConnectDB()
    const count = await Product.find({ title: { $regex: regex } }).count()
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE)
    return { products, count }
  } catch (error) {
    console.log('failed to connected fetch products', error)
    throw new Error('failed to connected with fetch products')
  }
}

export const fetchProduct = async (id) => {
  try {
    ConnectDB()
    const product= await Product.findById(id)
    return product;
  } catch (error) {
    console.log('failed to connected fetch product', error)
    throw new Error('failed to connected with fetch product')
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
