import { useState } from "react";
import flecheGauche from "../../assets/svg/fleche-gauche.svg";
import flecheDroite from "../../assets/svg/fleche-droite.svg";
import "./Slideshow.css";

export default function Slideshow({ images, titre }) {
  const [indexImage, setIndexImage] = useState(0);

  function imageSuivante() {
    setIndexImage((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function imagePrecedente() {
    setIndexImage((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label={`Carrousel d'images : ${titre}`}
      className="carrousel"
    >
      <div className="carrousel-piste">
        {images.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`Photo ${index + 1} : ${titre}`}
            aria-hidden={indexImage !== index}
            className="carrousel-image"
            style={{ translate: `${-100 * indexImage}%` }}
          />
        ))}
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={imagePrecedente}
            className="carrousel-bouton carrousel-bouton-gauche"
            aria-label="Image précédente"
          >
            <img src={flecheGauche} alt="" />
          </button>
          <button
            onClick={imageSuivante}
            className="carrousel-bouton carrousel-bouton-droite"
            aria-label="Image suivante"
          >
            <img src={flecheDroite} alt="" />
          </button>
          <p className="carrousel-compteur">
            {indexImage + 1}/{images.length}
          </p>
        </>
      )}
    </section>
  );
}
