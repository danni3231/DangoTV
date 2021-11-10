import React from "react";
import "./App.css";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";

import {BannerObj} from "../../Types/BannerObj";
import {AnimeObj} from "../../Types/AnimeObj";
import {EpisodeObj} from "../../Types/EpisodeObj";
import {TagOption} from "../../Types/TagOption";
import {StudioObj} from "../../Types/StudioObj";

import Gallery from "../Gallery/Gallery";
import Title from "../Title/Title";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import AnimeForm from "../Forms/AnimeForm/AnimeForm";
import AnimeView from "../AnimeComponents/AnimeView/AnimeView";
import EpisodeView from "../EpisodeComponents/EpisodeView/EpisodeView";

//utils
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../utils/Theme";
import StudioView from "../StudioView/StudioView";

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
         id: 0,
         animeName: "Jujutsu Kaisen",
         number: 1,
         name: "Ryomen Sukuna",
         description:
            "Yuuji es un joven que posee un talismán muy poderoso y él ni siquiera es consciente de ello. Pero un día se topa con Fushiguro y su vida dará un cambio radical.",
         date: "Oct 2, 2020",
         thumbnail: `${process.env.PUBLIC_URL}/images/Thumbnails/jujutsu/jujutsu_episode_1.jpg`,
         videoUrl: "https://drive.google.com/file/d/15mi9p2nT10lqj9qJEPHwhnFsGV0U9ohO/preview",
      },
      {
         id: 1,
         animeName: "Jujutsu Kaisen",
         number: 2,
         name: "Por mí",
         description:
            "El hecho de comerse el dedo de Sukuna le supondrá un grave problema a Yuuji, puesto que ahora tienen que ejecutarlo. Pero tiene un modo temporal de salvarse.",
         date: "Oct 9, 2020",
         thumbnail: `${process.env.PUBLIC_URL}/images/Thumbnails/jujutsu/jujutsu_episode_2.jpg`,
         videoUrl: "https://drive.google.com/file/d/14tAZoa0yUvWWSKZVlB10SDZ3cvwR3gdn/preview",
      },
      {
         id: 2,
         animeName: "Jujutsu Kaisen",
         number: 3,
         name: "Chica de acero",
         description:
            "Yuuji deberá demostrar que es apto para formar parte de la Preparatoria de Hechicería. Además, conocerán a la tercera integrante del equipo.",
         date: "Oct 16, 2020",
         thumbnail: `${process.env.PUBLIC_URL}/images/Thumbnails/jujutsu/jujutsu_episode_3.jpg`,
         videoUrl: "https://drive.google.com/file/d/1zOoi8-LnWdqh3WgsMrRDsLLri3H3CB9D/preview",
      },
   ]);

   const [studioElems, setStudioElems] = React.useState<StudioObj[]>([
      {
         id: 0,
         name: "Mappa",
         logo: `${process.env.PUBLIC_URL}/images/StudiosLogos/Mappa_Logo.svg`,
         description: `MAPPA Co, Ltd. (Japanese: 株式会社MAPPA, Hepburn: Kabushiki-gaisha MAPPA) is a Japanese animation studio. The studio has produced anime works including Kids on the Slope, Terror in Resonance, Yuri!!! on Ice, In This Corner of the World, Kakegurui, Banana Fish, Zombieland Saga, Dororo, Dorohedoro, Jujutsu Kaisen and the final season of Attack on Titan.
         "MAPPA" is an acronym for Maruyama Animation Produce Project Association. It was founded on June 14, 2011, by Masao Maruyama, a founder and former producer of Madhouse In April 2016, Maruyama resigned his position in the studio and founded a new studio, Studio M2`,
         date: "October 1998",
      },
   ]);

   const [animeElems, setAnimeElems] = React.useState<AnimeObj[]>([
      {
         id: Math.random(),
         name: "Jujutsu Kaisen",
         cover: `${process.env.PUBLIC_URL}/images/Covers/jujutsu-kaisen-cover.png`,
         description: `Yuji Itadori is a boy with tremendous physical strength, though he lives a completely ordinary high school life. 
               One day, to save a classmate who has been attacked by curses, he eats the finger of Ryomen Sukuna, taking the curse into his own soul. 
               From then on, he shares one body with Ryomen Sukuna. Guided by the most powerful of sorcerers, Satoru Gojo, Itadori is admitted to Tokyo Jujutsu High School, 
               an organization that fights the curses... and thus begins the heroic tale of a boy who became a curse to exorcise a curse, a life from which he could never turn back.`,
         status: "Finish",
         tags: ["Action", "Shonen", "Supernatural"],
         episodes: [episodeElems[0], episodeElems[1], episodeElems[2]],
         studios: [studioElems[0]],
      },
   ]);

   const [tagOptions, setTagOptions] = React.useState<TagOption[]>([
      {label: "test 1"},
      {label: "test 2"},
      {label: "Animals"},
   ]);

   const handleAddTagOption = (newTagOption: TagOption) => {
      setTagOptions([...tagOptions, newTagOption]);
   };

   const handleCreateAnime = (newAnimeElem: AnimeObj) => {
      console.log("nuevo elemento!", newAnimeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...animeElems, // ponemos todos los elementos que ya existían
         newAnimeElem,
      ];
      setAnimeElems(arrayCopy);
   };

   const handleCreateEpisode = (newEpisodeElem: EpisodeObj) => {
      console.log("nuevo elemento!", newEpisodeElem);
      // creamos un nuevo arreglo
      const arrayCopy = [
         ...episodeElems, // ponemos todos los elementos que ya existían
         newEpisodeElem,
      ];
      setEpisodeElems(arrayCopy);
   };

   return (
      <ThemeProvider theme={theme}>
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

               <Route path="/episode-details/:id">
                  <EpisodeView list={episodeElems} />
               </Route>

               <Route path="/studio-details/:id">
                  <StudioView listStudio={studioElems} listAnime={[]} />
               </Route>

               <Route path="/Forms">
                  <AnimeForm onCreate={handleCreateAnime} tagOptions={tagOptions} addTagOption={handleAddTagOption} />
               </Route>

               <Route path="/Studios">
                  <Title text="Studios" url="" />
               </Route>
            </Switch>
         </HashRouter>
      </ThemeProvider>
   );
}

export default App;
