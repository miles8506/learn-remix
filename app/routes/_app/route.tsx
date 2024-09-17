import { Outlet, redirect } from "@remix-run/react";
import MainHeader from "~/components/common/MainHeader/index";
import NavBar from "~/components/common/NavBar";

import styled from './style/style.module.scss'
import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { destroyUserId, hasUserId } from "~/.server/session";

export default function AppLayout() {
  return (
    <>
      <MainHeader />
      <NavBar />
      <div className={styled.main}>
        <Outlet />
      </div>
    </>
  )
}

export const loader = ({ request }: LoaderFunctionArgs) => {
  return hasUserId(request)
}

// export const action = async ({ request }: ActionFunctionArgs) => {
//   const method = request.method
//   console.log(method);
//   if (method === 'delete') {
//     return await destroyUserId(request)
//   }

//   return redirect('/auth')
// }

export const action = () => {
  console.log('action');
  return null
}