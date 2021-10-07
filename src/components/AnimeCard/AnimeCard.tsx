import * as React from "react";
import "./AnimeCard.css";

export interface AnimeCardProps {
    name: string;
    cover: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({name, cover}) => {
    return (
        <div className="AnimeCard">
            <img className="AnimeCard__img" src={cover} alt="anime cover" />
            <figcaption className="AnimeCard__figcaption">
                <p>{name}</p>
            </figcaption>
        </div>
    );
};

export default AnimeCard;
