import { NavLink } from "react-router"

function Header() {
  return (
    <div className="flex justify-between px-10 py-5 bg-gray-500 items-center">
        <img className="rounded-full " width="80px" src="https://thumbs.dreamstime.com/b/creative-simple-dragons-silhouettes-logo-stylized-vector-illustrations-simple-dragons-silhouettes-logo-130475058.jpg" alt="" />
        <ul className="flex gap-5 text-2xl">
        
            <li>
               <NavLink to="" className={({ isActive }) => (isActive ? "bg-blue-500 text-lime-50 rounded-xl p-2 shadow" : "")}>
            Home
          </NavLink>
            </li>
        <li>
          <NavLink
            to="/adduser"
            className={({ isActive }) => (isActive ? "bg-blue-500 text-lime-50 rounded-2xl p-2" : "")}
          >
            AddUser
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/userslist"
            className={({ isActive }) => (isActive ? "bg-blue-500 text-lime-50 rounded-2xl p-2" : "")}
          >
            UsersList
          </NavLink>
        </li>
        </ul>
        </div>
    
  )
}

export default Header