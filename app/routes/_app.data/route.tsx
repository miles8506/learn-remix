import { LoaderFunctionArgs } from "@remix-run/node"
import { getList } from "~/.server/list"
import { getUserId, sessionGuard } from "~/.server/session"

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await sessionGuard(request)
  
  const userId = await getUserId(request)
  return await getList(userId)
}
