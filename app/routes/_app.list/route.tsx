import type { MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import ToDoItem from "~/components/list/Item";

import type { ITodoItem } from "~/types";

import styled from './style/style.module.scss'
import { getList } from "~/.server/list";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>()

  return (
    <>
      <ul className={styled.list}>
        {
          data?.map(item => (
            <ToDoItem
              key={`${item.id}_${item.done}`}
              {...item}
            />
          ))
        }
      </ul>
      <Outlet />
    </>
  );
}

export const loader = async () => {
  return await getList()
}
