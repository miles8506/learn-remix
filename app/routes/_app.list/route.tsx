import type { MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import ToDoItem from "~/components/list/Item";

import type { ITodoItem } from "~/types";

import styled from './style/style.module.scss'

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const FAKE_DATA: ITodoItem[] = [
  {
    id: '999',
    title: 'Test',
    time: new Date().toISOString(),
    description: '123',
    done: false
  }
]

export default function Index() {
  return (
    <>
      <ul className={styled.list}>
        {
          FAKE_DATA.map(item => (
            <ToDoItem
              key={item.id}
              {...item}
            />
          ))
        }
      </ul>
      <Outlet />
    </>
  );
}
