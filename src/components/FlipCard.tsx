import "./FlipCard.css";

interface FlipCardProps {
    speciality: string;
    competences: string;
}

export function FlipCard({ speciality, competences }: FlipCardProps) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <p className="title">{speciality}</p>
                    <p>Hover Me</p>
                </div>
                <div className="flip-card-back">
                    <p className="title">Compétences</p>
                    <p>{competences}</p>
                </div>
            </div>
        </div>
    );
}