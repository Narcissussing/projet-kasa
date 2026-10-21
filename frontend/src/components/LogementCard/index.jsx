import { Link } from "react-router-dom";
import "./LogementCard.css";

export default function LogementCard({ logement }) {
  const { id, title, cover } = logement;
  return (
    <Link to={`/logement/${id}`} className="logement-card">
      <img src={cover} alt="" />
      <h2>{title}</h2>
    </Link>
  );
}
