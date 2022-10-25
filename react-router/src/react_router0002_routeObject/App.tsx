import { Outlet, Link,useRoutes ,useParams} from "react-router-dom";
//useRoutes:可以使用数组的形式定义路由，不用再使用Routes,route等来回嵌套了
export default function App() {
  const element=useRoutes(
    [
     {
      path:"/",
      element:<Layout/>,
      children:[
      {
          path:"/home",
          element:<Home/>,
         },
         {
          path:"/coureses",
          element:<Coureses/>,
          children:[
            {index:true,element:<CoursesIndex/>},
            {path:'/coureses/:id',element:<Course/>}
          ]
         },
         {
          path:"/dashboard",
          element:<Dashboard/>,
         },
         {
          path:"/nothing-here",
          element:<NoMatch/>,
         }
      ]
     }
    ]
  );
  return element;
}

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/coureses">Coureses</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
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

function Coureses() {
  return (
    <div>
      <h2>Coureses</h2>
      请选择一项课程
      <Outlet/>
      </div> 
  );
}
function CoursesIndex() {
  return (
    <div>
      <p>Please choose a course:</p>

      <nav>
        <ul>
          <li>
            <Link to="react-fundamentals">React Fundamentals</Link>
          </li>
          <li>
            <Link to="advanced-react">Advanced React</Link>
          </li>
          <li>
            <Link to="react-router">React Router</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
  function Course() {
    let { id } = useParams<"id">();
  
    return (
      <div>
        <h2>
          Welcome to the {id!.split("-").join(" ")} course!
        </h2>
  
        <p>This is a great course. You're gonna love it!</p>
  
        <Link to="/coureses">See all courses</Link>
      </div>
    );
  }  
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/home ">Go to the home page</Link>
      </p>
    </div>
  );
}
