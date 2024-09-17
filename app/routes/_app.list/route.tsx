import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import ToDoItem from "~/components/list/Item";

import styled from './style/style.module.scss'
import { getList } from "~/.server/list";
import { getUserId, sessionGuard } from "~/.server/session";

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

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await sessionGuard(request)

  const userId = await getUserId(request)
  return await getList(userId)
}
