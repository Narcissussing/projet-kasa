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
  if (loading) return <p>Chargement...</p>;
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
  const [prenom, ...nom] = host.name.split(" ");

  return (
    <article>
      <title>{`${title} · Kasa`}</title>
      <Slideshow titre={title} images={pictures} />
      <div className="logement-entete">
        <div className="logement-info">
          <h1 className="logement-titre">{title}</h1>
          <p className="logement-lieu">{location}</p>
          <ul className="logement-tags">
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="logement-hote-note">
          <div className="logement-hote">
            <p className="hote-nom">
              {prenom}
              <br />
              {nom.join(" ")}
            </p>

            <img
              className="hote-photo"
              src={host.picture}
              alt={`Photo de l'hôte ${host.name}`}
            />
          </div>
          <Rating rating={rating} />
        </div>
      </div>

      <div className="logement-details">
        <section>
          <Collapse titre="Description" contenu={description} />
        </section>
        <section>
          <Collapse
            titre="Équipements"
            contenu={
              <ul className="logement-details-equipements">
                {equipments.map((equipement) => (
                  <li className="equipement" key={equipement}>
                    {equipement}
                  </li>
                ))}
              </ul>
            }
          />
        </section>
      </div>
    </article>
  );
}
