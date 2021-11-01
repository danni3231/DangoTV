import * as React from "react";
import {useHistory} from "react-router-dom";
import "./AnimeCard.css";

export interface AnimeCardProps {
   id: number;
   name: string;
   cover: string;
}

const AnimeCard: React.FC<AnimeCardProps> = ({id, name, cover}) => {
   const history = useHistory();

   const handleView = () => {
      history.push(`/anime-details/${id}`);
   };

   return (
      <div className="AnimeCard" onClick={handleView}>
         <img className="AnimeCard__img" src={cover} alt="anime cover" />
         <figcaption className="AnimeCard__figcaption">
            <p>{name}</p>
         </figcaption>
      </div>
   );
};

export default AnimeCard;
