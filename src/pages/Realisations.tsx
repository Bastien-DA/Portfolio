import './Realisations.css'
import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {LanguageCard} from "../components/LanguageCard.tsx";
import {useParams} from "react-router-dom";

function Realisations() {
    const {specialite} = useParams();

    const webCards = [
        {
            image: "/src/assets/react-code.jpeg",
            title: "Portfolio",
            url: "https://fr.react.dev/",
            description: "Portfolio réalisé en React.js et en Vite.js. Ce projet a été réalisé dans le cadre de ma formation à Ynov Campus Bordeaux et pour une meilleure visibilité auprès des recruteurs.",
            projectUrl: "https://github.com/Bastien-DA/Portfolio"
        },
        {
            image: "/src/assets/nextjs-code.png",
            title: "LMCV",
            url: "https://nextjs.org/",
            description: "Site pour particulier réalisé en Next.js. Ce projet a été réalisé suite au besoin d'un particulier pour améliorer son quotidien au course pour la création des mains courantes.",
            projectUrl: "https://github.com/Bastien-DA/LMCV"
        },
        {
            image: "/src/assets/fastapi-code.jpeg",
            title: "LMCV-API",
            url: "https://fastapi.tiangolo.com/",
            description: "Suite du projet LMCV, cette API a été réalisé en FastApi pour permettre une meilleure gestion des données, une meilleure sécurité et une facilité pour mettre cela en place.",
            projectUrl: "https://github.com/Bastien-DA/LMCV-API"
        },
        {
            image: "/src/assets/python-code.webp",
            title: "SniffOsu",
            url: "https://www.djangoproject.com/",
            description: "Site pour les joueurs de Osu! réalisé en Django. Ce projet a été réalisé dans le cadre de ma formation à Ynov Campus Bordeaux pour apprendre à utiliser Django et manipuler des données.",
            projectUrl: "https://github.com/Wanaps/SniffOsu"
        }
    ];

    const mobileCards = [
        {
            image: "/src/assets/flutter-code.jpg",
            title: "Fastdrop Mobile",
            url: "https://flutter.dev/",
            description: "Suite d'un projet initié pour un collègue de reproduire SnapDrop. La version web étant déjà réalisé, on a décidé de réaliser la version mobile en Flutter pour une meilleure expérience utilisateur.",
            projectUrl: "https://github.com/DoctorPok42/Fastdrop-Mobile"
        }
    ];

    const desktopCards = [
        {
            image: "/src/assets/csharp-code.jpg",
            title: "Calculatrice",
            url: "https://docs.microsoft.com/fr-fr/dotnet/csharp/",
            description: "Projet réaliser dans le cadre de ma formation à Ynov Campus Bordeaux pour apprendre à utiliser les principes fondamentales en csharp et apprendre l'utilité et la force d'un framework.",
            projectUrl: "https://github.com/Logards/Calculatrice-cSharp"
        },
        {
            image: "/src/assets/python-code.webp",
            title: "Python Blyat",
            url: "https://www.python.org/",
            description: "Projet réalisé dans le cadre de ma formation à Ynov Campus Bordeaux. Projet de fin du cursus Python où le but était de créer un jeu avec la base de code donnée par le professeur.",
            projectUrl: "https://github.com/Ahliko/PythonBlyat"
        }
    ];

    return (
        <main className="specialites">
            <header>
                <NavBar />
            </header>
            <div className={"section-card"}>
                {specialite === "web" && webCards.map((card, index) => (
                    <LanguageCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        url={card.url}
                        description={card.description}
                        projectUrl={card.projectUrl}
                    />
                ))}
                {specialite === "mobile" && mobileCards.map((card, index) => (
                    <LanguageCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        url={card.url}
                        description={card.description}
                        projectUrl={card.projectUrl}
                    />
                ))}
                {specialite === "desktop" && desktopCards.map((card, index) => (
                    <LanguageCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        url={card.url}
                        description={card.description}
                        projectUrl={card.projectUrl}
                    />
                ))}
                {}
            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}

export default Realisations;