import React from "react";
import "./App.css";
import Header from "../Header/Header";

import AnimeElem, {AnimeCardProps} from "../AnimeCard/AnimeCard";
import EpisodeElem, {EpisodeCardProps} from "../EpisodeCard/EpisodeCard";

import coverJutjusu from "../../Data/AnimeCovers/jujutsu-kaisen-cover.png";
import thumbnailJutjusu from "../../Data/Thumbnails/jujutsu/jujutsu_episode_1.jpg";
import AnimeForm from "../AnimeForm/AnimeForm";
import Title from "../Title/Title";

type AnimeCardObj = AnimeCardProps & {
   id: number;
};

type EpisodeCardObj = EpisodeCardProps & {
   id: number;
};

function App() {
   const [animeElems, setAnimeElems] = React.useState<AnimeCardObj[]>([
      {
         id: Math.random(),
         name: "Jujutsu Kaisen",
         cover: coverJutjusu,
      },
   ]);

   const handleCreateAnime = (newAnimeElem: AnimeCardProps) => {
      console.log("nuevo elemento!", newAnimeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...animeElems, // ponemos todos los elementos que ya existían
         {
            // agregamos el nuevo elemento con la información recibida
            id: Math.random(),
            name: newAnimeElem.name,
            cover: coverJutjusu,
         },
      ];
      setAnimeElems(arrayCopy);
   };

   const [episodeElems, setEpisodeElems] = React.useState<EpisodeCardObj[]>([
      {
         id: Math.random(),
         anime: "Jujutsu Kaisen",
         thumbnail: thumbnailJutjusu,
         number: 1,
      },
   ]);

   const handleCreateEpisode = (newEpisodeElem: EpisodeCardProps) => {
      console.log("nuevo elemento!", newEpisodeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...episodeElems, // ponemos todos los elementos que ya existían
         {
            // agregamos el nuevo elemento con la información recibida
            id: Math.random(),
            anime: newEpisodeElem.anime,
            thumbnail: thumbnailJutjusu,
            number: 1,
         },
      ];
      setEpisodeElems(arrayCopy);
   };

   return (
      <div className="App">
         <Header />
         <main className="Main">
            <article className="Main__Content">
               <Title text="Latest Episodes" url="" />

               <section className="gallery">
                  <div className="gallery__row">
                     {episodeElems.map((elem) => {
                        return (
                           <EpisodeElem
                              key={elem.id}
                              anime={elem.anime}
                              thumbnail={elem.thumbnail}
                              number={elem.number}
                           />
                        );
                     })}
                  </div>
               </section>

               <Title text="Latest Animes" url="" />

               <section className="gallery">
                  <div className="gallery__row">
                     {animeElems.map((elem) => {
                        return <AnimeElem key={elem.id} name={elem.name} cover={elem.cover} />;
                     })}
                  </div>
               </section>
            </article>
            <hr />
            <article className="Main__News"></article>

            <AnimeForm onCreate={handleCreateAnime} />
         </main>
      </div>
   );
}

export default App;
