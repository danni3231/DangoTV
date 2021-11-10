import * as React from "react";
import {useHistory} from "react-router-dom";
import {EpisodeObj} from "../../../Types/EpisodeObj";
import "./EpisodeCard.css";

export interface EpisodeCardProps {
   episode: EpisodeObj;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({episode}) => {
   const history = useHistory();

   const handleView = () => {
      history.push(`/episode-details/${episode.id}`);
   };

   return (
      <div className="EpisodeCard" onClick={handleView}>
         <img className="EpisodeCard__img" src={episode.thumbnail} alt="episode cover" />
         <figcaption className="EpisodeCard__figcaption">
            <h1>{episode.anime?.name}</h1>
            <h2>Episode {episode.number}</h2>
         </figcaption>
      </div>
   );
};

export default EpisodeCard;
