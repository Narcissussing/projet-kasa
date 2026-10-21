import { Link } from "react-router-dom";
import "./ErreurPage.css";

export default function ErreurPage() {
  return (
    <div className="erreur">
      <h1>404</h1>
      <p>Oups! La page que <br />vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d’accueil</Link>
    </div>
  );
}

