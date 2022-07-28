import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
//路由的基本使用方法
export default function App() {
  return (
    <div>
      <h1>inbox-app的页面</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inbox />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
          <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <Link to="/">Inbox</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

function Inbox() {
  return (
    <div>
      <h2>这是Inbox-app的页面</h2>
    </div>
  );
}
