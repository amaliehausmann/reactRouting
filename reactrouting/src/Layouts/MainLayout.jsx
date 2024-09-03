import style from "./MainLayout.module.scss";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/NavBar/NavBar";

export function MainLayout() {
  return (
    <>
    <NavBar></NavBar>
      <main className={style.mainStyle}>
        <Outlet></Outlet>
      </main>
    </>
  );
}
