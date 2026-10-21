import "./AccueilPage.css";
import Banner from "../../components/Banner";
import bannerImage from "../../assets/images/banniere-accueil.jpg";
import useListeLogements from "../../hooks/useListeLogements";
import LogementCard from "../../components/LogementCard";

export default function AccueilPage() {
  const { logements, loading, error } = useListeLogements();
  if (error) return <p>{error}</p>;
  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <title>Accueil · Kasa</title>
      <Banner
        image={bannerImage}
        texte={
          <>
            Chez vous, <br />
            partout et ailleurs
          </>
        }
      />

      <section className="logements">
        <ul className="logements-container">
          {logements.map((logement) => (
            <li key={logement.id} className="logement-item">
              <LogementCard logement={logement} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
