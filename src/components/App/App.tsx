import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";

import AnimeElem, {AnimeCardProps} from "../AnimeCard/AnimeCard";
import EpisodeElem, {EpisodeCardProps} from "../EpisodeCard/EpisodeCard";

import AnimeForm from "../AnimeForm/AnimeForm";
import Title from "../Title/Title";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import {BannerObj} from "../../Types/BannerObj";
import {AnimeObj} from "../../Types/AnimeObj";
import {EpisodeObj} from "../../Types/EpisodeObj";

function App() {
   const animesBanner: BannerObj[] = [
      {
         id: 0,
         img: `${process.env.PUBLIC_URL}/images/Banners/banner-naruto.png`,
         name: "Boruto: Naruto Next Generations",
      },
      {
         id: 1,
         img: `${process.env.PUBLIC_URL}/images/Banners/banner-naruto.png`,
         name: "Naruto",
      },
      {
         id: 2,
         img: `${process.env.PUBLIC_URL}/images/Banners/banner-naruto.png`,
         name: "Jujutsu Kaisen",
      },
   ];

   const [episodeElems, setEpisodeElems] = React.useState<EpisodeObj[]>([
      {
         id: Math.random(),
         animeName: "Jujutsu Kaisen",
         thumbnail: `${process.env.PUBLIC_URL}/images/Thumbnails/jujutsu/jujutsu_episode_1.jpg`,
         number: 1,
      },
   ]);

   const [animeElems, setAnimeElems] = React.useState<AnimeObj[]>([
      {
         id: Math.random(),
         name: "Jujutsu Kaisen",
         cover: `${process.env.PUBLIC_URL}/images/Covers/jujutsu-kaisen-cover.png`,
         episodes: [episodeElems[0]],
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
            cover: `${process.env.PUBLIC_URL}/images/Covers/jujutsu-kaisen-cover.png`,
            episodes: [episodeElems[0]],
         },
      ];
      setAnimeElems(arrayCopy);
   };

   const handleCreateEpisode = (newEpisodeElem: EpisodeCardProps) => {
      console.log("nuevo elemento!", newEpisodeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...episodeElems, // ponemos todos los elementos que ya existían
         {
            // agregamos el nuevo elemento con la información recibida
            id: Math.random(),
            animeName: newEpisodeElem.anime,
            thumbnail: `${process.env.PUBLIC_URL}/images/Thumbnails/jujutsu/jujutsu_episode_1.jpg`,
            number: 1,
         },
      ];
      setEpisodeElems(arrayCopy);
   };

   return (
      <HashRouter>
         <Header />

         <Switch>
            <Route exact path="/">
               <Banner animeList={animesBanner} />
               <article className="Main">
                  <section className="Main__Content">
                     <Title text="Latest Episodes" url="" />

                     <section className="gallery">
                        <div className="gallery__row">
                           {episodeElems.map((elem) => {
                              return (
                                 <EpisodeElem
                                    key={elem.id}
                                    anime={elem.animeName}
                                    thumbnail={elem.thumbnail}
                                    number={elem.number}
                                 />
                              );
                           })}
                        </div>
                     </section>

                     <Title text="Latest Animes" url="" />

                     <section className="gallery gallery--withoutPadding">
                        <div className="gallery__row">
                           {animeElems.map((elem) => {
                              return <AnimeElem key={elem.id} name={elem.name} cover={elem.cover} />;
                           })}
                        </div>
                     </section>
                  </section>
                  <hr />
                  <section className="Main__News"></section>
               </article>
            </Route>

            <Route path="/Forms">
               <AnimeForm onCreate={handleCreateAnime} />
            </Route>

            <Route path="/Studios"></Route>
         </Switch>
      </HashRouter>
   );
}

export default App;
