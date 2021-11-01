import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";

import {BannerObj} from "../../Types/BannerObj";
import {AnimeObj} from "../../Types/AnimeObj";
import {EpisodeObj} from "../../Types/EpisodeObj";

import AnimeForm from "../AnimeForm/AnimeForm";
import Title from "../Title/Title";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";

import AnimeView from "../AnimeView/AnimeView";
import AnimeCard from "../AnimeCard/AnimeCard";
import EpisodeCard from "../EpisodeCard/EpisodeCard";
import Gallery from "../Gallery/Gallery";

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
         description: "Something",
         status: "Finish",
         tags: ["Tag 1", "Tag 2", "Tag 3"],
         episodes: [episodeElems[0], episodeElems[0], episodeElems[0]],
      },
   ]);

   const handleCreateAnime = (newAnimeElem: AnimeObj) => {
      console.log("nuevo elemento!", newAnimeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...animeElems, // ponemos todos los elementos que ya existían
         {
            // agregamos el nuevo elemento con la información recibida
            id: Math.random(),
            name: newAnimeElem.name,
            cover: `${process.env.PUBLIC_URL}/images/Covers/jujutsu-kaisen-cover.png`,
            description: "Something",
            status: "Finish",
            tags: ["Tag 1", "Tag 2", "Tag 3"],
            episodes: [],
         },
      ];
      setAnimeElems(arrayCopy);
   };

   const handleCreateEpisode = (newEpisodeElem: EpisodeObj) => {
      console.log("nuevo elemento!", newEpisodeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...episodeElems, // ponemos todos los elementos que ya existían
         {
            // agregamos el nuevo elemento con la información recibida
            id: Math.random(),
            animeName: newEpisodeElem.animeName,
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

                     <Gallery type="Episode" listEpisode={episodeElems} />

                     <Title text="Latest Animes" url="" />

                     <Gallery type="Anime" listAnime={animeElems} withoutPadding />
                  </section>
                  <hr />
                  <section className="Main__News"></section>
               </article>
            </Route>

            <Route path="/anime-details/:id">
               <AnimeView list={animeElems} />
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
