import { Outlet, redirect } from "@remix-run/react";
import MainHeader from "~/components/common/MainHeader/index";
import NavBar from "~/components/common/NavBar";

import styled from './style/style.module.scss'
import { LoaderFunctionArgs } from "@remix-run/node";
import { hasUserId } from "~/.server/session";

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
