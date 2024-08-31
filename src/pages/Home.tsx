import './Home.css'
import { NavBar } from '../components/NavBar.tsx'
import { CircleCard } from '../components/CircleCard.tsx'
import { Footer } from '../components/Footer.tsx'

function Home() {

    const handleDownloadCV = () => {
        const link = document.createElement('a')
        link.href = '/cv.pdf'
        link.download = 'cv.pdf'
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <main className="home">
            <header>
                <NavBar />
            </header>
            <div className="information-section">
                <section className="profil">
                    <h2 className="name">Bastien De Amezaga</h2>
                    <h1 className="job">DEVELOPPEUR JUNIOR</h1>
                    <button type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-8"
                            onClick={handleDownloadCV}>
                        Mon CV
                    </button>
                </section>
                <section className="photo">
                    <img src="/public/assets/photo-de-profil.JPG" alt="Avatar de Bastien De Amezaga" />
                </section>
                <div className="arrow">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="about-me-section">
                <section className="code-picture pl-40">
                    <img src="/public/assets/code.jpg" alt="code"/>
                </section>
                <section className="about-me ml-40 pr-40">
                    <h1 className="mb-10">A propos</h1>
                    <p>Actuellement en Bachelor 3 à Ynov Bordeaux Campus, j'ai pu apprendre et approfondir de multiples
                        softskills et hardskills. Cela a pu me donner de l'expérience dans les multiples domaines du développement
                        web, mobile et desktop. Je suis passionné par le développement et apprendre de nouvelles choses.
                    </p>
                </section>
            </div>
            <div className="hardskills-section">
                <div className="hardskills-title">
                    <h1>Hardskills</h1>
                    <h2>Les principaux langages</h2>
                </div>
                <div className={"cards-container"}>
                    <CircleCard title={"Web"} language_image1={"/public/assets/react.svg"} language_name1={"React"} language_image2={"/public/assets/go.svg"} language_name2={"Golang"} language_image3={"/public/assets/fastapi.svg"} language_name3={"FastApi"}/>
                    <CircleCard title={"Mobile"} language_image1={"/public/assets/flutter.svg"} language_name1={"Flutter"}/>
                    <CircleCard title={"Desktop"} language_image1={"/public/assets/csharp.svg"} language_name1={"C#"} language_image2={"/public/assets/java.svg"} language_name2={"Java"} language_image3={"/public/assets/python.svg"} language_name3={"Python"}/>
                    <CircleCard title={"Autre"} language_image1={"/public/assets/docker.svg"} language_name1={"Docker"} language_image2={"/public/assets/mongodb.svg"} language_name2={"MongoDB"} language_image3={"/public/assets/git.svg"} language_name3={"Git"}/>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Home