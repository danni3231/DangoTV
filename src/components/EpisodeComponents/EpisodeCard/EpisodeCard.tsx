import * as React from "react";
import {useHistory} from "react-router-dom";
import "./EpisodeCard.css";

export interface EpisodeCardProps {
   id: number;
   anime: string;
   thumbnail: string;
   number: number;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({id, anime, thumbnail, number}) => {
   const history = useHistory();

   const handleView = () => {
      history.push(`/episode-details/${id}`);
   };

   return (
      <div className="EpisodeCard" onClick={handleView}>
         <img className="EpisodeCard__img" src={thumbnail} alt="episode cover" />
         <figcaption className="EpisodeCard__figcaption">
            <h1>{anime}</h1>
            <h2>Episode {number}</h2>
         </figcaption>
      </div>
   );
};

export default EpisodeCard;
