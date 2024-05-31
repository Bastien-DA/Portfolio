import './NavBar.css'

export function NavBar() {
    return (
        <nav className="navBar">
            <a className="text" href="/">Portfolio</a>
            <a className="text" href="/experience">Expériences</a>
            <a className="text" href="/realisations">Réalisations</a>
            <a className="text" href="/contact">Contact</a>
        </nav>
    )
}
