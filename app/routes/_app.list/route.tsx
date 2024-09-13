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

const FAKE_DATA: ITodoItem[] = [
  {
    id: '999',
    title: 'Test',
    time: new Date(),
    description: '123',
    isDone: false
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
