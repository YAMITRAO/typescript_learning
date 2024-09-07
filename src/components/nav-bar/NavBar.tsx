
import style from "./nav-bar.module.css"
import { NavLink } from "react-router-dom";
// import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <div className={style.nav_container}> 
    <NavLink to="/dashboard"> <div className={style.nav_button}>Dashboard</div></NavLink>
    <NavLink to="/"> <div className={style.nav_button}>Add Expense</div></NavLink>
    </div>
  )
}

export default NavBar;