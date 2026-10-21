import { Navigate, useParams } from "react-router-dom";
import useLogement from "../../hooks/useLogement";
import Slideshow from "../../components/Slideshow";
import Collapse from "../../components/Collapse";
import Rating from "../../components/Rating";
import "./LogementPage.css";

export default function LogementPage() {
  const { id } = useParams();
  const { logement, error, loading } = useLogement(id);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Chargement…</p>;
  if (!logement) return <Navigate to="/404" replace />;

  const {
    title,
    pictures,
    description,
    host,
    rating,
    location,
    equipments,
    tags,
  } = logement;

  return (
    <article>
      <Slideshow titre={title} imageUrls={pictures} />

      <div>
        <h1>{title}</h1>
        <p>{location}</p>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div>
        <div>
          <p>{host.name}</p>
          <img src={host.picture} alt={`Photo de l'hôte {host.name}`} />
          <Rating rating={rating} />
        </div>
      </div>

      <div></div>

      <section>
        <Collapse titre="Description" contenu={description} />
      </section>
      <section>
        <Collapse
          titre="Équipements"
          contenu={
            <ul>
              {equipments.map((equipement) => (
                <li key={equipement}>{equipement}</li>
              ))}
            </ul>
          }
        />
      </section>
    </article>
  );
}
