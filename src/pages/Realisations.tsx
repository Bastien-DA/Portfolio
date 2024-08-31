import './Realisations.css';
import { NavBar } from '../components/NavBar.tsx';
import { Footer } from '../components/Footer.tsx';
import { SquareCard } from '../components/SquareCard.tsx';
import { useParams } from 'react-router-dom';

function Realisations() {
    const { specialite } = useParams();

    const webCards = [
        {
            image: "/assets/react-code.jpeg",
            title: "Portfolio",
            url: "https://fr.react.dev/",
            description: "Portfolio réalisé en React.js et en Vite.js. Ce projet a été réalisé dans le cadre de ma formation à Ynov Campus Bordeaux et pour une meilleure visibilité auprès des recruteurs.",
            projectUrl: "https://github.com/Bastien-DA/Portfolio"
        },
        {
            image: "/assets/nextjs-code.png",
            title: "LMCV",
            url: "https://nextjs.org/",
            description: "Site pour particulier réalisé en Next.js. Ce projet a été réalisé suite au besoin d'un particulier pour améliorer son quotidien au course pour la création des mains courantes.",
            projectUrl: "https://github.com/Bastien-DA/LMCV"
        },
        {
            image: "/assets/fastapi-code.jpeg",
            title: "LMCV-API",
            url: "https://fastapi.tiangolo.com/",
            description: "Suite du projet LMCV, cette API a été réalisé en FastApi pour permettre une meilleure gestion des données, une meilleure sécurité et une facilité pour mettre cela en place.",
            projectUrl: "https://github.com/Bastien-DA/LMCV-API"
        },
        {
            image: "/assets/python-code.webp",
            title: "SniffOsu",
            url: "https://www.djangoproject.com/",
            description: "Site pour les joueurs de Osu! réalisé en Django. Ce projet a été réalisé dans le cadre de ma formation à Ynov Campus Bordeaux pour apprendre à utiliser Django et manipuler des données.",
            projectUrl: "https://github.com/Wanaps/SniffOsu"
        }
    ];

    const mobileCards = [
        {
            image: "/assets/flutter-code.jpg",
            title: "Fastdrop Mobile",
            url: "https://flutter.dev/",
            description: "Suite d'un projet initié pour un collègue de reproduire SnapDrop. La version web étant déjà réalisé, on a décidé de réaliser la version mobile en Flutter pour une meilleure expérience utilisateur.",
            projectUrl: "https://github.com/DoctorPok42/Fastdrop-Mobile"
        }
    ];

    const desktopCards = [
        {
            image: "/assets/csharp-code.jpg",
            title: "Calculatrice",
            url: "https://docs.microsoft.com/fr-fr/dotnet/csharp/",
            description: "Projet réaliser dans le cadre de ma formation à Ynov Campus Bordeaux pour apprendre à utiliser les principes fondamentales en csharp et apprendre l'utilité et la force d'un framework.",
            projectUrl: "https://github.com/Logards/Calculatrice-cSharp"
        },
        {
            image: "/assets/weatherapp.png",
            title: "WeatherApp",
            url: "https://docs.microsoft.com/fr-fr/dotnet/csharp/",
            description: "Projet réalisé dans le cadre de ma formation à Ynov Campus Bordeaux pour utiliser toute les compétences acquise durant le parcours csharp et approfondir les connaissances dans le framework Avalonia.",
            projectUrl: "https://github.com/Manon-Arc/WeatherApp"
        },
        {
            image: "/assets/python-code.webp",
            title: "Python Blyat",
            url: "https://www.python.org/",
            description: "Projet réalisé dans le cadre de ma formation à Ynov Campus Bordeaux. Projet de fin du cursus Python où le but était de créer un jeu avec la base de code donnée par le professeur.",
            projectUrl: "https://github.com/Ahliko/PythonBlyat"
        }
    ];

    const otherCards = [
        {
            image: "/assets/docker-code.png",
            title: "Basket-API",
            url: "https://www.docker.com/",
            description: "Projet réalisé dans le cadre de ma formation à Ynov Campus Bordeaux. Projet compensatoire lié au stage. API dockerisé avec un PhpMyAdmin et un MySQl.",
            projectUrl: "https://github.com/Logards/Basket-API"
        },
        {
            image: "/assets/mongodb-code.webp",
            title: "MongoDB",
            url: "https://www.mongodb.com/",
            description: "Suite du projet LMCV ou le but était de creer un site pour les mains courantes en course. L'API est dockerisé avec un Mongodb et un mongo express.",
            projectUrl: ""
        },
        {
            image: "/assets/git-branch.jpg",
            title: "Git",
            url: "https://git-scm.com/",
            description: "Voici le lien de mon github où vous pourrez retrouver tous mes projets réalisés en dehors de ma formation à Ynov Campus Bordeaux.",
            projectUrl: "https://github.com/Bastien-DA"
        }
    ];

    const allCards = webCards.concat(mobileCards, desktopCards, otherCards);

    const filteredCards = specialite ? allCards.filter(card => {
        if (specialite === "web") return webCards.includes(card);
        if (specialite === "mobile") return mobileCards.includes(card);
        if (specialite === "desktop") return desktopCards.includes(card);
        if (specialite === "autre") return otherCards.includes(card);
        return false;
    }) : allCards;

    return (
        <main className="specialites">
            <header>
                <NavBar />
            </header>
            <div className={"section-card"}>
                {filteredCards.map((card, index) => (
                    <SquareCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        url={card.url}
                        description={card.description}
                        projectUrl={card.projectUrl}
                    />
                ))}
            </div>
            <footer>
                <Footer />
            </footer>
        </main>
    );
}

export default Realisations;