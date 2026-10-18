import './Footer.css'
import logoFooter from "../../assets/svg/logo-footer.svg"

export default function Footer() {
    const annee = new Date().getFullYear()
  return (
    <footer>
        <img src={logoFooter} alt="Logo Kasa" />
        <p>© {annee} Kasa. All rights reserved</p>
    </footer>
  )
}