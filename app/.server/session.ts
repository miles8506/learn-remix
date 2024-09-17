import { createCookieSessionStorage, json, redirect } from "@remix-run/node";
import { registerEmail } from "./auth";

export const USER_ID = 'userId'

export const { getSession, commitSession, destroySession } = createCookieSessionStorage({
  cookie: {
    name: '__session',
    secrets: [process.env.SESSION_SECRET],
    sameSite: 'lax',
    httpOnly: true,
    secure: true,
    maxAge: 7 * 24 * 60 * 60
  }
})

export const register = async (userId: string, request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))
  session.set(USER_ID, userId)

  return redirect('/list', {
    headers: { 'Set-Cookie': await commitSession(session) }
  })
}

export const getUserId = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))
  
  return session.get(USER_ID)
}

export const hasUserId = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))

  return session.has(USER_ID)
}

export const destroyUserId = async (request: Request) => {
  const session = await getSession(request.headers.get('Cookie'))

  return redirect('/auth', { headers: { 'Set-Cookie': await destroySession(session) } })
}
