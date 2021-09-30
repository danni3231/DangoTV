import * as React from "react";
import "./AnimeCard.css";

export interface AnimeCardProps {
    name: string;
    imgUrl: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({name, imgUrl}) => {
    return (
        <div className="AnimeCard">
            <img className="AnimeCard__img" src={imgUrl} alt="anime cover" />
            <figcaption className="AnimeCard__figcaption">
                <p>{name}</p>
            </figcaption>
        </div>
    );
};

export default AnimeCard;
