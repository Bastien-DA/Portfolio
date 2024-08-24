import "./CircleCards.css";

interface CircleCardProps {
    title: string;
    language_image1?: string;
    language_name1?: string;
    language_image2?: string;
    language_name2?: string;
    language_image3?: string;
    language_name3?: string;
}

export function CircleCard({ title, language_image1, language_name1, language_image2, language_name2, language_image3, language_name3 }: CircleCardProps) {
    return (
        <a href={`/realisations/${title.toLowerCase()}`}>
            <div className="circle-card">
                <div className="circle-card-inner">
                    <div className="circle-card-front">
                        <div className="info">
                                <h1>{title}</h1>
                                <h2>Click me</h2>
                        </div>
                    </div>
                    <div className="language-container">
                        {language_image1 && language_name1 && (
                            <div className="language-circle">
                                <img src={language_image1} alt={language_name1}/>
                                <p>{language_name1}</p>
                            </div>
                        )}
                        {language_image2 && language_name2 && (
                            <div className="language-circle">
                                <img src={language_image2} alt={language_name2}/>
                                <p>{language_name2}</p>
                            </div>
                        )}
                        {language_image3 && language_name3 && (
                            <div className="language-circle">
                                <img src={language_image3} alt={language_name3}/>
                                <p>{language_name3}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
}