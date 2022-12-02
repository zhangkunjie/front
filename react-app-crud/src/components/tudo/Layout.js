import { Link, Outlet } from "react-router-dom"

export const Layout=()=> {
    return (
      <div>
        <nav className='sidebar'>
          <p><Link to="/tudoList">Tudo列表</Link></p> 
        </nav>
        <div className="content">
            <Outlet/>
        </div>
      </div>
    )
}  