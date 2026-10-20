import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo";

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <nav>
        <NavLink to="/" end>
          Accueil
        </NavLink>
        <NavLink to="/a-propos">A Propos</NavLink>
      </nav>
    </header>
  );
}
