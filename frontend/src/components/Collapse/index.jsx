import "./Collapse.css";
import chevron from "../../assets/svg/chevron.svg";
import { useState } from "react";

export default function Collapse({ titre, contenu }) {
  const [estVisible, setEstVisible] = useState(false);
  return (
    <div className={estVisible ? "collapse ouvert" : "collapse"}>
      <button
        aria-expanded={estVisible}
        onClick={() => setEstVisible(!estVisible)}
      >
        {titre}
        <img src={chevron} alt="" />
      </button>
      <div className="collapse-contenu" inert={!estVisible}>
        <div className="collapse-texte">{contenu}</div>
      </div>
    </div>
  );
}
