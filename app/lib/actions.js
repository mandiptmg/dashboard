'use server'

import { revalidatePath } from 'next/cache'
import { User, Product } from './model'
import { ConnectDB } from './mongodb'
import { redirect } from 'next/navigation'
import bcrypt from 'bcrypt'

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    ConnectDB()

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    })

    await newUser.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create user!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}
export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData)

  try {
    ConnectDB()

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    }

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )

    await User.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update user!')
  }

  revalidatePath('/dashboard/users')
  redirect('/dashboard/users')
}

export const addProduct = async (formData) => {
  const { title, stock, price, desc, color, size } =
    Object.fromEntries(formData)

  try {
    ConnectDB()

    const newProduct = new Product({
      title,
      stock,
      price,
      desc,
      color,
      size,
    })

    await newProduct.save()
  } catch (err) {
    console.log(err)
    throw new Error('Failed to create Product!')
  }
  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const updateProduct = async (formData) => {
  const { id, title, stock, price, desc, color, size } =
    Object.fromEntries(formData)

  try {
    ConnectDB()

    const updateFields = {
      title,
      stock,
      price,
      desc,
      color,
      size,
    }
    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === '' || undefined) && delete updateFields[key]
    )
    await Product.findByIdAndUpdate(id, updateFields)
  } catch (err) {
    console.log(err)
    throw new Error('Failed to update Product!')
  }
  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    ConnectDB()

    const users = await User.findByIdAndDelete(id)
    return users
  } catch (error) {
    console.log(error)
    throw new Error('Failed to delete user!')
  }
  revalidatePath('/dashboard/users')
}

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData)

  try {
    ConnectDB()
    const products = await Product.findByIdAndDelete(id)
    return products
  } catch (error) {
    console.log(error)
    throw new Error('Failed to delete product!')
  }
  revalidatePath('/dashboard/products')
}
