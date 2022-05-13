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
    <Link
      className="px-4 py-4 
      inline-block hover:underline hover:text-orange-400 text-white text-lg font-medium mb:text-sm"
      to={to}
    >
      {children}
    </Link>
  );
}
export default function App() {
  return (
    <html lang="en" className="dark">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-black relative">
        <header className="top-0 z-50 mb:px-2 sm:sticky sticky bg-black">
          <div className="flex flex-row">
            <div className="flex-1">
              <HeaderLink to="/">Home</HeaderLink>
              <HeaderLink to="/projects">Recent Projects</HeaderLink>
              <HeaderLink to="/contacts">Contacts</HeaderLink>
            </div>
            <div className=" text-white mb:text-sm py-4">Berenika Ahmetaj</div>
          </div>
        </header>

        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
