import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";

//此代码将会在组件首次渲染时，自动导入包含导入的组件的包。
const About = React.lazy(() => import("./About"));
const Dashboard = React.lazy(() => import("./Dashboard"));

export default function App() {
  return (
    <div>
      <h1>Lazy Loading Example</h1>
     <p>
     React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 default export 的 React 组件。
然后应在 Suspense 组件中渲染 lazy 组件，如此使得我们可以使用在等待加载 lazy 组件时做优雅降级（如 loading 指示器等）
    </p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about'
           element={
            <React.Suspense fallback={<>加载中...</>}>
              <About/>
            </React.Suspense>
           }
          />
          <Route path='dashboard/*'
           element={
            <React.Suspense fallback={<>加载中...</>}>
              <Dashboard/>
            </React.Suspense>
           }
          />
          <Route path="*" element={<NoMatch />} />
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard/messages">Messages (Dashboard)</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
