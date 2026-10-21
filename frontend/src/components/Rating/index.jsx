import "./Rating.css";
import etoileActive from "../../assets/svg/star-active.svg";
import etoileDesactive from "../../assets/svg/star-inactive.svg";

export default function Rating({ rating }) {
  const nombreEtoiles = Number(rating);
  return (
    <div
      className="rating-etoiles"
      role="img"
      aria-label={`Note: ${nombreEtoiles} sur 5`}
    >
      {[...Array(5)].map((_, i) => (
        <img
          key={i}
          src={nombreEtoiles > i ? etoileActive : etoileDesactive}
          alt=""
        />
      ))}
    </div>
  );
}
