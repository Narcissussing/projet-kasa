import './AccueilPage.css'
import Banner from '../../components/Banner'
import bannerImage from "../../assets/images/banner-accueil.jpg"


export default function AccueilPage() {
    const bannerTexte = "Chez vous, partout et ailleurs"
  return (
    <div>
        <Banner image={bannerImage} texte={bannerTexte}/>
    </div>
  )
}