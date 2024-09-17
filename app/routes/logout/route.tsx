import { ActionFunctionArgs } from "@remix-run/node"
import { destroyUserId } from "~/.server/session"

export const action = ({ request }: ActionFunctionArgs) => {
  return destroyUserId(request)
}
