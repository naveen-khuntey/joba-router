import { Outlet, NavLink } from "react-router-dom";
import Breadcrumbs from "../components/BreadCrumbs";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink>
          <NavLink to="Careers">Careers</NavLink>
        </nav>
        <Breadcrumbs/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}