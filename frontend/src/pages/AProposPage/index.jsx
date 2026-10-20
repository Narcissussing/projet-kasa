import './AProposPage.css'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { valeurs } from '../../data/valeurs'
import bannerImage from "../../assets/images/banner-apropos.jpg"

export default function AProposPage() {
  return (
    <div className='apropos'>
        <Banner image={bannerImage} />
        <div className='collapses'>
            {valeurs.map((valeur)=>(
               <Collapse key={valeur.titre} titre={valeur.titre} contenu={valeur.texte}/> 
            ))}
        </div>
    </div>
  )
}