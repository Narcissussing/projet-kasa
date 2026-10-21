import { useState } from "react";
import flecheGauche from "../../assets/svg/arrow-left.svg";
import flecheDroite from "../../assets/svg/arrow-right.svg";
import "./Slideshow.css";

export default function Slideshow({ imageUrls, titre }) {
  const [imageIndex, setImageIndex] = useState(0);

  function imageSuivante() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  function imagePrecedente() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  return (
    <section
      aria-label={`Carrousel d'images de ${titre}`}
      className="img-slider-container"
    >
      <div className="img-slider">
        {imageUrls.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`Photo ${index + 1} de ${titre}`}
            aria-hidden={imageIndex !== index}
            className="img-slider-img"
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      {imageUrls.length > 1 && (
        <>
          <button
            onClick={imagePrecedente}
            className="img-slider-btn img-slider-btn-gauche"
            aria-label="Image précédente"
          >
            <img src={flecheGauche} alt="" />
          </button>
          <button
            onClick={imageSuivante}
            className="img-slider-btn img-slider-btn-droite"
            aria-label="Image suivante"
          >
            <img src={flecheDroite} alt="" />
          </button>
          <p className="img-slider-counter">
            {imageIndex + 1}/{imageUrls.length}
          </p>
        </>
      )}
    </section>
  );
}
