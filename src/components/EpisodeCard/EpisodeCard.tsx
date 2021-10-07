import * as React from "react";
import "./EpisodeCard.css";

export interface EpisodeCardProps {
   anime: string;
   thumbnail: string;
   number: number;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({anime, thumbnail, number}) => {
   return (
      <div className="EpisodeCard">
         <img className="EpisodeCard__img" src={thumbnail} alt="episode cover" />
         <figcaption className="EpisodeCard__figcaption">
            <h1>{anime}</h1>
            <h2>Episode {number}</h2>
         </figcaption>
      </div>
   );
};

export default EpisodeCard;
