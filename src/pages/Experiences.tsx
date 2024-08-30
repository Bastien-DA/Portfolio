import './Experiences.css'
import {NavBar} from "../components/NavBar.tsx";
import {Footer} from "../components/Footer.tsx";
import {RectangularCard} from "../components/RectangularCard.tsx";
import {useParams} from "react-router-dom";
import React from "react";

function Experiences() {

    const {experience} = useParams();
    const [id, setId] = React.useState(0);

    function openDialog(id: number) {
        const dialog = document.querySelector('dialog');
        setId(id);
        dialog!.showModal();
    }

    function closeDialog() {
        const dialog = document.querySelector('dialog');
        dialog!.close();
    }

    return (
        <main className="experiences">
            <header>
                <NavBar/>
            </header>
            <div className="all-experiences">
                {!experience &&
                    <RectangularCard image={"/src/assets/panier-basket.png"} title={"BasketData"} url={"/experiences/1"}
                                     listElements={[
                                         "Développement d'une api en python avec fast api",
                                         "Déploiement de l'api et de la base de données Sqlite avec docker",
                                         "Création d'un site web en python avec Django",
                                         "Exploitation des données de l'api pour les afficher sur le site web"]}/>
                }
                {experience === "1" &&
                    <div className={"entreprise-container"}>
                        <div className={"entreprise-info"}>
                            <img src={"/src/assets/panier-basket1.jpg"} alt={""}/>
                            <div className={"information"}>
                                <h1>BasketData</h1>
                                <p>BasketData est une entreprise fondée en 2023 par
                                    deux passionnés de basketball. Leur objectif était de créer une plateforme qui
                                    rassemble des données complètes sur les équipes de basketball et leurs joueurs,
                                    offrant aux fans des analyses approfondies et des prédictions basées sur des
                                    algorithmes avancés.
                                    Grâce à l'innovation technologique, BasketData permet aux utilisateurs de comparer
                                    des joueurs,
                                    suivre les performances des équipes, et même anticiper les résultats des matchs.
                                    Rapidement,
                                    la plateforme devient une référence mondiale pour les amateurs de basketball, avec
                                    une mission
                                    claire : rapprocher les fans de leur sport favori à travers des informations
                                    précises et accessibles.</p>
                            </div>
                        </div>
                        <div className={"articles"}>
                            <div className={"article"} onClick={() => openDialog(1)}>
                                <h3>Analyse du cahier des charges</h3>
                                <p>BasketData est une entreprise dédiée à fournir aux fans de basketball des
                                    informations détaillées et analysées sur les équipes et les joueurs à travers le
                                    monde. Le projet consiste à développer un site web complet, soutenu par une API et
                                    une base de données, pour permettre la collecte, le traitement, et la visualisation
                                    des données relatives aux joueurs et aux équipes. L'objectif est de créer une
                                    plateforme intuitive, performante, et évolutive qui devienne la référence pour les
                                    amateurs de basketball.</p>
                            </div>
                            <div className={"article"} onClick={() => openDialog(2)}>
                                <h3>Choix des technologies</h3>
                                <p>Le projet BasketData repose sur un ensemble de choix technologiques soigneusement
                                    pensés pour
                                    garantir la performance, la sécurité, et l'efficacité. Pour la création de l'API,
                                    FastAPI a
                                    été sélectionné en raison de sa rapidité et de sa simplicité. Ce framework Python
                                    moderne
                                    est conçu pour gérer un grand nombre de requêtes simultanées grâce à son support
                                    asynchrone,
                                    ce qui est essentiel pour une application qui doit traiter en temps réel des données
                                    provenant de sources externes. En plus de sa performance, FastAPI offre une
                                    validation de
                                    données intégrée et génère automatiquement une documentation complète de l'API, ce
                                    qui
                                    facilite le développement et l'intégration.</p>
                            </div>
                            <div className={"article"} onClick={() => openDialog(3)}>
                                <h3>Analyse de l'API</h3>
                                <p>L'intégration de l'API BallDontLie.io dans le projet BasketData représente un choix
                                    stratégique clé pour offrir une plateforme riche en données de basketball.
                                    BallDontLie.io est une API gratuite, spécialisée dans les statistiques et
                                    informations sur la NBA, couvrant des aspects essentiels tels que les joueurs, les
                                    équipes, les matchs, et les saisons. Sa structure RESTful simple et bien documentée
                                    facilite son intégration rapide dans le projet, ce qui permet aux développeurs de se
                                    concentrer sur d'autres aspects critiques de BasketData, comme l'expérience
                                    utilisateur et les fonctionnalités de comparaison de joueurs.</p>
                            </div>
                            <div className={"article"} onClick={() => openDialog(4)}>
                                <h3>Etapes de réalisations</h3>
                                <p>Dans un premier temps la mise en place de l'API avec la base de données Sqlite et de
                                    l'outil d'administration phpMyAdmin, ont été crucial pour la mise ne place du site
                                    web.
                                    Tout a commencé par la mise en place de la base de données avec Docker pour plus de
                                    simplicités et pour commencer à créer l'API qui allait permettre de créer les
                                    utilisateurs
                                    et leurs connections. Mise en place de PhpMyAdmin pour l'administration de la base
                                    de
                                    données et pouvoir tester certaines fonctions que l'API pouvait potentiellement
                                    accuellir
                                    comme la connection et la création d'un utilisateur. Enfin pour la partie
                                    utilisateurs
                                    ça a été la création de l'API avec fastAPI et sqlAlchemy qui ont permis la
                                    connection avec
                                    la base de données, une documentation claire et simple et la création des
                                    utilisateurs et
                                    leur connection.
                                </p>
                            </div>
                            <div className={"article"} onClick={() => openDialog(5)}>
                                <h3>Conclusion</h3>
                                <p>Le projet BasketData a abouti à la création d'une plateforme robuste pour la gestion
                                    des données de basketball, intégrant efficacement plusieurs technologies clés.
                                    FastAPI a été choisi pour développer l'API en raison de sa rapidité et de sa
                                    capacité à gérer efficacement les requêtes. Cette API permet d’accéder facilement
                                    aux données des joueurs, des équipes et des matchs.</p>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <dialog>
                {id === 1 &&
                    <div>
                        <h1>L'analyse du cahier des charges</h1>
                        <p>Le projet de création du site web BasketData est centré sur la mise en place d'une plateforme
                            dédiée aux fans de basketball, leur offrant des informations détaillées sur les joueurs et
                            les équipes de la NBA. Le cahier des charges prévoit le développement d'un site web
                            comprenant des pages dédiées aux joueurs et équipes et aux équipes sur des données
                            recueillies
                            via une API externe. Cette API, issue du
                            service balldontlie.io, permettra de récupérer en temps réel des
                            statistiques et des informations biographiques sur les joueurs et équipes. Le site devra
                            présenter ces données de manière intuitive et offrir une expérience utilisateur fluide,
                            grâce à une interface développée avec des frameworks modernes.

                            La base de données, au cœur du projet, sera optimisée pour stocker et gérer de grandes
                            quantités de données. La structure de la base devra être conçue pour garantir la
                            performance et la scalabilité, tout en permettant des requêtes rapides même en cas de forte
                            affluence sur le site. La sécurité sera une priorité, avec l'implémentation de protocoles
                            HTTPS, de systèmes d'authentification et d'autorisation robustes, et de mesures pour
                            protéger les données des utilisateurs conformément au RGPD.

                            Le projet comprend un planning détaillé, avec des étapes spécifiques pour l'étude, le
                            développement backend, l'intégration de l'API, le développement frontend, les tests, et le
                            lancement. La maintenance annuelle du site.

                            Enfin, la validation du projet repose sur l'implémentation complète des fonctionnalités, la
                            conformité des performances et de la sécurité aux exigences fixées, et la mise en ligne du
                            site avec une documentation complète. L'objectif final de BasketData est de devenir la
                            plateforme de référence pour les fans de basketball en combinant une technologie avancée et
                            une accessibilité optimale pour tous les utilisateurs.</p>
                        <button onClick={closeDialog}>Close</button>
                    </div>
                }
                {id === 2 &&
                    <div>
                        <h1>Choix des technologies</h1>
                        <p>Le projet BasketData repose sur un ensemble de choix technologiques soigneusement pensés pour
                            garantir la performance, la sécurité, et l'efficacité. Pour la création de l'API, FastAPI a
                            été sélectionné en raison de sa rapidité et de sa simplicité. Ce framework Python moderne
                            est conçu pour gérer un grand nombre de requêtes simultanées grâce à son support asynchrone,
                            ce qui est essentiel pour une application qui doit traiter en temps réel des données
                            provenant de sources externes. En plus de sa performance, FastAPI offre une validation de
                            données intégrée et génère automatiquement une documentation complète de l'API, ce qui
                            facilite le développement et l'intégration.

                            Pour l'administration de la base de données, PHPMyAdmin a été choisi pour sa convivialité et
                            ses fonctionnalités avancées. Cet outil web permet de gérer facilement les bases de données,
                            y compris la création, la modification, et la suppression de tables et d'entrées, ainsi que
                            l'import/export de données. PHPMyAdmin est particulièrement apprécié pour son interface
                            intuitive, ce qui simplifie la gestion quotidienne des bases de données, même pour les
                            utilisateurs non techniques.

                            Concernant la base de données elle-même, SQLite a été retenu en raison de sa légèreté et de
                            sa simplicité de déploiement. SQLite est une base de données embarquée qui ne nécessite pas
                            de serveur séparé, ce qui réduit la complexité et les coûts associés au projet. Bien que
                            légère, SQLite offre des performances suffisantes pour des projets de taille moyenne comme
                            BasketData, où elle peut gérer efficacement les données statistiques et les informations
                            relatives au basketball. De plus, SQLite s'intègre parfaitement avec Django, le framework
                            choisi pour le développement du site web.

                            Django a été choisi pour le développement du site web en raison de sa robustesse et de sa
                            maturité. Ce framework Python est reconnu pour sa capacité à développer rapidement des
                            applications web sécurisées et évolutives. Avec son ORM intégré, Django facilite la gestion
                            de la base de données SQLite, permettant ainsi de maintenir un code propre et structuré.
                            Django est également équipé de nombreuses fonctionnalités de sécurité par défaut, telles que
                            la protection contre les injections SQL et les attaques CSRF, ce qui est crucial pour
                            protéger les données des utilisateurs de BasketData.

                            En combinant FastAPI, PHPMyAdmin, SQLite, et Django, le projet BasketData s'appuie sur une
                            architecture technologique qui allie rapidité, simplicité, et sécurité. Ces choix permettent
                            de créer une plateforme robuste, capable de gérer les besoins actuels tout en étant
                            suffisamment flexible pour évoluer avec les futures exigences du projet. Ainsi, BasketData
                            est bien positionné pour devenir une référence incontournable pour les fans de basketball en
                            quête d'analyses et de données précises.</p>
                        <button onClick={closeDialog}>Close</button>
                    </div>
                }
                {id === 3 &&
                    <div>
                        <h1>Analyse de l'API</h1>
                        <p>L'intégration de l'API BallDontLie.io dans le projet BasketData représente un choix
                            stratégique clé pour offrir une plateforme riche en données de basketball. BallDontLie.io
                            est une API gratuite, spécialisée dans les statistiques et informations sur la NBA, couvrant
                            des aspects essentiels tels que les joueurs, les équipes, les matchs, et les saisons. Sa
                            structure RESTful simple et bien documentée facilite son intégration rapide dans le projet,
                            ce qui permet aux développeurs de se concentrer sur d'autres aspects critiques de
                            BasketData, comme l'expérience utilisateur et les fonctionnalités de comparaison de joueurs.

                            Les avantages principaux de cette API incluent sa gratuité, son accessibilité sans clé API
                            pour les requêtes de base, et sa capacité à fournir des données historiques détaillées sur
                            la NBA. Ces caractéristiques permettent à BasketData de proposer une analyse en profondeur
                            des performances des joueurs et des équipes, tout en offrant aux utilisateurs une interface
                            fluide avec des temps de réponse rapides. L'API est conçue pour gérer un grand nombre de
                            requêtes avec des performances solides, ce qui est crucial pour maintenir une expérience
                            utilisateur optimale.

                            Cependant, il est important de noter quelques limitations de l'API BallDontLie.io. Sa
                            couverture est principalement axée sur la NBA, ce qui pourrait limiter l'expansion future de
                            BasketData vers d'autres ligues ou compétitions internationales. De plus, bien que les
                            données soient régulièrement mises à jour, elles ne sont pas toujours en temps réel, ce qui
                            pourrait poser des défis pour les applications nécessitant des mises à jour instantanées. La
                            personnalisation est également limitée, ce qui pourrait restreindre l'ajout de
                            fonctionnalités spécifiques souhaitées pour l'avenir du projet.

                            En conclusion, l'API BallDontLie.io s'avère être une solution idéale pour les premières
                            phases de développement de BasketData, offrant un excellent équilibre entre accessibilité,
                            richesse des données, et facilité d'intégration. Ce choix permettra à BasketData de se
                            positionner comme une plateforme de référence pour les fans de basketball, tout en
                            conservant la flexibilité nécessaire pour évoluer et s'adapter aux futurs besoins du
                            projet.</p>
                    </div>
                }
                {id === 4 &&
                    <div>
                        <h1>Etapes de Réalisations</h1>
                        <p>Dans un premier temps la mise en place de l'API avec la base de données Sqlite et de
                            l'outil d'administration phpMyAdmin, ont été crucial pour la mise ne place du site web.
                            Tout a commencé par la mise en place de la base de données avec Docker pour plus de
                            simplicités et pour commencer à créer l'API qui allait permettre de créer les utilisateurs
                            et leurs connections. Mise en place de PhpMyAdmin pour l'administration de la base de
                            données et pouvoir tester certaines fonctions que l'API pouvait potentiellement accuellir
                            comme la connection et la création d'un utilisateur. Enfin pour la partie utilisateurs
                            ça a été la création de l'API avec fastAPI et sqlAlchemy qui ont permis la connection avec
                            la base de données, une documentation claire et simple et la création des utilisateurs et
                            leur connection.

                            La seconde étape a été la création du site web en Django qui allait permettre de pouvoir
                            visualiser les données de l'API et de les afficher de manière plus claire et plus
                            intuitive pour les utilisateurs. La création des pages, des templates et des vues ont été
                            les premières étapes pour pouvoir afficher les données de l'API. Ensuite la création des
                            utilisateurs et de leur connection pour pouvoir accéder à leur espace personnel et
                            pouvoir voir les données des basketeurs et des équipes. Enfin la dernière étape a été
                            l'optimisation du site web pour une meilleure expérience utilisateur et la mise en place
                            de la sécurité pour protéger les données des utilisateurs.
                        </p>
                    </div>
                }
                {id === 5 &&
                    <div>
                        <h1>Conclusion</h1>
                        <p>### Conclusion du Projet BasketData

                            Le projet BasketData a abouti à la création d'une plateforme robuste pour la gestion des
                            données de basketball, intégrant efficacement plusieurs technologies clés. FastAPI a été
                            choisi pour développer l'API en raison de sa rapidité et de sa capacité à gérer efficacement
                            les requêtes. Cette API permet d’accéder facilement aux données des joueurs, des équipes et
                            des matchs.

                            Pour le stockage des données, SQLite a été utilisé en raison de sa simplicité et de son
                            intégration directe avec Django, ce qui facilite la gestion des informations sans nécessiter
                            une configuration complexe. La création des modèles de données dans Django a permis
                            d’organiser les informations de manière structurée et accessible.

                            Bien que PHPMyAdmin soit principalement destiné à MySQL, sa mention souligne son utilité
                            potentielle pour les projets futurs nécessitant une gestion de bases de données plus
                            complexes. Il offre une interface graphique pour la gestion des bases de données, ce qui est
                            un atout pour la manipulation et l'administration des données.

                            Le site web a été développé avec Django, un framework Python robuste, pour fournir une
                            interface utilisateur dynamique et interactive. L'intégration de l'API avec Django permet
                            aux utilisateurs d'accéder aux données en temps réel, offrant ainsi une expérience
                            utilisateur fluide et engageante.

                            En résumé, BasketData réussit à combiner ces technologies pour offrir une plateforme
                            complète et évolutive, répondant aux besoins des passionnés de basketball. Avec une base
                            technique solide et une architecture flexible, le projet est bien positionné pour évoluer et
                            s'adapter aux futurs développements et besoins du marché.</p>
                    </div>
                }
            </dialog>
            <footer>
                <Footer/>
            </footer>
        </main>
    )
}

export default Experiences;
