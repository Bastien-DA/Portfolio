import './Home.css'
import { NavBar } from '../components/NavBar.tsx'
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()

    const handleContactClick = () => {
        navigate('/contact')
    }

    return (
        <main className="home">
            <header>
                <NavBar />
            </header>
            <div className="information-section">
                <section className="profil mr-96">
                    <h2 className="name">Bastien De Amezaga</h2>
                    <h1 className="job">DEVELOPPEUR JUNIOR</h1>
                    <button type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-8"
                            onClick={handleContactClick}>
                        Contact
                    </button>
                </section>
                <section className="photo ml-85">
                    <img src="/src/assets/photo-de-profil.JPG" alt="Avatar de Bastien De Amezaga" />
                </section>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="about-me-section">
                <section className="code-picture">
                    <img src="/src/assets/code.jpg" alt="code"/>
                </section>
                <section className="about-me">
                    <h1>A propos</h1>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Amet magna consectetur rhoncus sagittis faucibus senectus leo. Aliquet sagittis neque et ultrices nascetur morbi venenatis. Ad donec nisl cursus lobortis lacinia ornare. Turpis nisl fermentum interdum efficitur integer parturient sociosqu ullamcorper. Congue sagittis vivamus tincidunt egestas; tristique facilisis molestie dis. Potenti aenean proin ipsum cubilia laoreet quam. Duis pretium a malesuada ornare, ante aptent hac vulputate. Morbi arcu auctor hendrerit cras potenti diam imperdiet! Enim dictum libero senectus iaculis sagittis suspendisse enim et imperdiet.</p>
                </section>
            </div>
        </main>
    )
}

export default Home