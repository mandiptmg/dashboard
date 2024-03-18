import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { authConfig } from './authconfig'
import bcrypt from 'bcrypt'
import { User } from './lib/model'
import { ConnectDB } from './lib/mongodb'

const login = async (credentials) => {
  try {
    ConnectDB()
    const user = await User.findOne({ email: credentials.email })

    if (!user || !user.isAdmin) throw new Error('Wrong credentials!')

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    )

    if (!isPasswordCorrect) throw new Error('Wrong credentials!')

    return user
  } catch (err) {
    console.log(err)
    throw new Error('Failed to login!')
  }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials)
          return user
        } catch (err) {
          return null
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email
        token.img = user.img
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.email = token.email
        session.user.img = token.img
      }
      return session
    },
  },
})