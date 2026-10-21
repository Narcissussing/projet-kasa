import "./Banner.css";

export default function Banner({ image, texte }) {
  //image décorative
  return (
    <div className={texte ? "banner banner-texte" : "banner"}>
      <img src={image} alt="" />
      {texte && <h1>{texte}</h1>}
    </div>
  );
}
