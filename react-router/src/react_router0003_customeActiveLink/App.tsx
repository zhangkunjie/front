import { Outlet,Routes,Route,Link, LinkProps, useResolvedPath, useMatch} from "react-router-dom";
//自定义Link，可以给链接加上颜色，标注活动链接
export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='home' element={<Home/>}>Home</Route>
      <Route path='about' element={<About/>} >About</Route>
      </Route>
    </Routes>
  )
}
function Layout()
{
  return (
      <div>
        <nav>
           <ul>
            <li><CustomLink to='/home'>Home</CustomLink></li>
            <li><CustomLink to='/about'>About</CustomLink></li>
           </ul>
        </nav>
        <hr/>
        <Outlet/>
      </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home-用户自定义Link</h2>
    </div> 
  );
}
function About() {
  return (
    <div>
      <h2>About</h2>
      </div> 
  );
}
//自定义Link
function CustomLink({children,to,...props}:LinkProps)
{ 
  const resolved=useResolvedPath(to);
  //这里暂时搞不懂，先略过
  const match=useMatch({path:resolved.pathname,end:true});
  //console.log(match);
  return(
  <div>
     <Link style={{textDecoration:match?'underline':'none'}} to={to}>{children}</Link>
     {match && '(active)'}
  </div>
  )
}