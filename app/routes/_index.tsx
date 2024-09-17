import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { sessionGuard } from "~/.server/session";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>main</div>
  );
}

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await sessionGuard(request)

  return null
}
