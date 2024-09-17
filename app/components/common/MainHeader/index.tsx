import { Form, Link, useLoaderData } from "@remix-run/react";

import styled from './style/style.module.scss'
import { loader } from "~/routes/_app/route";

export default function MainHeader() {
  const isLogin = useLoaderData<typeof loader>()  

  return (
    <header className={styled.header}>
      {
        isLogin ?
          (
            <Form method="delete" action="/logout">
              <button
                className={styled['auth-btn']}
              >
                Logout
              </button>
            </Form>  
          ):
          (
            <Link to='/auth'>:Login</Link>   
          ) 
      }
    </header>
  )
}
