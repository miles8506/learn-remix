import { Form, useSearchParams } from "@remix-run/react";

import styled from './style/style.module.scss'
import BaseInput from "~/components/base/Input";
import { ActionFunctionArgs } from "@remix-run/node";
import BaseButton from "~/components/base/Button";
import { useMemo } from "react";

enum AUTH_TYPE {
  LOGIN = 'login',
  REGISTER = 'register'
}

export default function AuthPage() {
  const [urlSearchParams] = useSearchParams()

  const mode = useMemo(() => urlSearchParams.get('mode') ?? AUTH_TYPE.LOGIN, [urlSearchParams])

  return (
    <div className={styled.auth}>
      <h4>{mode === AUTH_TYPE.LOGIN ? 'Login' : 'Register'}</h4>
      <Form method="post" className={styled.form}>
        <BaseInput
          type="email"
          name="email"
          required
          htmlFor="Account"
          labelText="Account"
        />
        <BaseInput
          type="password"
          name="password"
          required
          htmlFor="Password"
          labelText="Password"
        />
        <div className={styled.bottom}>
          <BaseButton variant="large">Login</BaseButton>
        </div>
      </Form>
    </div>
  )
}

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)

  return null
}
