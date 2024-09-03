import style from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

export function NavBar() {
  return (
    <nav className={style.navStyling}>
      <ul>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#ffc813'} : {color: 'white'}} to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#ffc813'} : {color: 'white'}} to={"/concepts"}>Koncepter</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#ffc813'} : {color: 'white'}} to={"/about"}>Om</NavLink>
        </li>
        <li>
          <NavLink style={({isActive}) => isActive ? {color: '#ffc813'} : {color: 'white'}} to={"/contact"}>Kontakt Os</NavLink>
        </li>
      </ul>
    </nav>
  );
}
