import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";

import styled from './style/style.module.scss'
import BaseInput from "~/components/base/Input";
import { ActionFunctionArgs } from "@remix-run/node";
import BaseButton from "~/components/base/Button";
import { useMemo } from "react";
import { validationAuth } from "~/.server/validationAuth";
import { IAuthRequest } from "~/types";
import { registerEmail } from "~/.server/auth";

enum AUTH_TYPE {
  LOGIN = 'login',
  REGISTER = 'register'
}

export default function AuthPage() {
  const [urlSearchParams] = useSearchParams()
  const actionError = useActionData() as { account: string, password: string }

  const mode = useMemo(() => urlSearchParams.get('mode') ?? AUTH_TYPE.LOGIN, [urlSearchParams])

  return (
    <div className={styled.auth}>
      <h4>{mode === AUTH_TYPE.LOGIN ? 'Login' : 'Register'}</h4>
      <Form method="post" className={styled.form}>
        <BaseInput
          type="email"
          name="email"
          required
          htmlFor="Email"
          labelText="Email"
        />
        <BaseInput
          type="password"
          name="password"
          required
          htmlFor="Password"
          labelText="Password"
        />
        <ul className={styled.errors}>
          {
            actionError && Object.values(actionError).map(error => (
              <li key={error}>{error}</li>
            ))
          }
        </ul>
        <Link
          to={`/auth?mode=${mode === AUTH_TYPE.LOGIN ? AUTH_TYPE.REGISTER : AUTH_TYPE.LOGIN}`}
        >
          {mode === AUTH_TYPE.LOGIN ? 'register account' : 'login account'}
        </Link>
        <div className={styled.bottom}>
          <BaseButton variant="large">Login</BaseButton>
        </div>
      </Form>
    </div>
  )
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData) as unknown as IAuthRequest

  const mode = new URL(request.url).searchParams.get('mode') ?? AUTH_TYPE.LOGIN as AUTH_TYPE

  try {
    validationAuth(data)
    if (mode === AUTH_TYPE.LOGIN) {
      
    }

    if (mode === AUTH_TYPE.REGISTER) {
      return await registerEmail(data, request)
    }
  } catch (error) {
    return error
  }
}
