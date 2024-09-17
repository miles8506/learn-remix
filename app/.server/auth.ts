import { IAuthRequest } from "~/types"
import { prisma } from "./db"
import { commit } from "./session"
import bcryptjs from 'bcryptjs'


const { hash, compare } = bcryptjs

export const isExistEmail = async (email: string) => {
  const exist = await prisma.user.findFirst({ where: { email } })

  if (exist) {
    throw new Error('this email has exist')
  }
}

export const registerEmail = async (payload: IAuthRequest, request: Request) => {
  try {
    const { email, password } = payload
    await isExistEmail(email)
    const hashPassword = await hash(password, 14)
    const { id } = await prisma.user.create({
      data: {
        email,
        password: hashPassword
      }
    })
    return await commit(id, request)
  } catch (error) {
    throw error
  }
}

export const login = async (payload: IAuthRequest, request: Request) => {
  const { email, password } = payload
  const errors = {} as {account: string, password: string}

  const user = await prisma.user.findFirst({ where: { email } })

  if (!user) {
    errors.account = 'login error'
    throw errors
  } else {

  }

  const checkPassword = await compare(password, user.password)

  if (!checkPassword) {
    errors.password = 'password error'
    throw errors
  }

  return commit(user.id, request)
}
