import { Outlet } from "@remix-run/react";
import MainHeader from "~/components/common/MainHeader/index";
import NavBar from "~/components/common/NavBar";

import styled from './style.module.css'

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
