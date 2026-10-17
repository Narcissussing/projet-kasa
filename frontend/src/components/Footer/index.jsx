import './Footer.css'

export default function Footer() {
    const annee = new Date().getFullYear()
  return (
    <footer>
        <p>© {annee} Kasa. All rights reserved</p>
    </footer>
  )
}