import * as React from "react";
import "./Gallery.css";
import {AnimeObj} from "../../Types/AnimeObj";
import {EpisodeObj} from "../../Types/EpisodeObj";
import AnimeCard from "../AnimeCard/AnimeCard";
import EpisodeCard from "../EpisodeCard/EpisodeCard";

interface GalleryProps {
   type: "Anime" | "Episode";
   listAnime?: AnimeObj[];
   listEpisode?: EpisodeObj[];
   withoutPadding?: boolean;
}

const Gallery: React.FC<GalleryProps> = ({type, listAnime, listEpisode, withoutPadding}) => {
   return (
      <section className={withoutPadding ? "gallery gallery--withoutPadding" : "gallery"}>
         <div className="gallery__row">
            {type === "Episode" && listEpisode !== undefined
               ? listEpisode.map((episode) => {
                    return (
                       <EpisodeCard
                          key={episode.id}
                          anime={episode.animeName}
                          thumbnail={episode.thumbnail}
                          number={episode.number}
                       />
                    );
                 })
               : type === "Anime" && listAnime !== undefined
               ? listAnime.map((Anime) => {
                    return <AnimeCard id={Anime.id} name={Anime.name} cover={Anime.cover} />;
                 })
               : "Error no se cargo la vista previa"}
         </div>
      </section>
   );
};

export default Gallery;
