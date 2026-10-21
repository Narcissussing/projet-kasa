import "./AProposPage.css";
import Banner from "../../components/Banner";
import Collapse from "../../components/Collapse";
import { valeurs } from "../../data/valeurs";
import bannerImage from "../../assets/images/banniere-apropos.jpg";

export default function AProposPage() {
  return (
    <div className="apropos">
      <title>À propos · Kasa</title>
      <h1 className="sr-only">À propos</h1>
      <Banner image={bannerImage} />
      <div className="collapses">
        {valeurs.map((valeur) => (
          <Collapse
            key={valeur.titre}
            titre={valeur.titre}
            contenu={valeur.texte}
          />
        ))}
      </div>
    </div>
  );
}
