import "./app.css";

import type { MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
function HeaderLink({ to, children }: { to: string; children: string }) {
  return (
    <Link className="px-3 py-2 hover:underline text-lg font-medium" to={to}>
      {children}
    </Link>
  );
}
export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header className="flex flex-row bg-gray-200 p-2">
          <div className="flex-1">
            <HeaderLink to="/">Home</HeaderLink>
            <HeaderLink to="/about">About</HeaderLink>
            <HeaderLink to="/projects">Recent Projects</HeaderLink>
            <HeaderLink to="/contacts">Contacts</HeaderLink>
          </div>
          <h3 className="flex-0">Berenika Ahmetaj</h3>
        </header>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
