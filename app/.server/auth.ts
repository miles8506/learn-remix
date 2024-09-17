import { IAuthRequest } from "~/types"
import { prisma } from "./db"
import { getSession, register, USER_ID } from "./session"
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
    return await register(id, request)
  } catch (error) {
    throw error
  }
}
