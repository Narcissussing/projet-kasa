import { Link } from "react-router-dom";
import logo from "../../assets/svg/logo.svg";

import "./Logo.css";

export default function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Kasa - Accueil" />
    </Link>
  );
}
