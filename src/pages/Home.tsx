import './Home.css'
import {NavBar} from '../components/NavBar.tsx'

function Home() {
    return (
        <div>
            <header>
                <NavBar />
            </header>
            <main className="home">
                <section className="profil">
                    <h2 className="name">Bastien De Amezaga</h2>
                    <h1 className="job">Développeur junior</h1>
                    <button className="Contact">Contact</button>
                </section>
                <section className="photo">
                    <img src="/src/assets/photo-de-profil.JPG" alt="Avatar de Bastien De Amezaga" />
                </section>
            </main>
        </div>
    )
}

export default Home
