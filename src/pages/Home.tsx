import './Home.css'
import {NavBar} from '../components/NavBar.tsx'

function Home() {
    return (
        <div className="home">
            <NavBar />
            <div>
                <h2 className="name">Bastien De Amezaga</h2>
                <h1 className="job">Développeur étudiant</h1>
            </div>
        </div>
    )
}

export default Home
