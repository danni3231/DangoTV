import React from "react";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";

import {BannerObj} from "../../Types/BannerObj";
import {AnimeObj} from "../../Types/AnimeObj";
import {EpisodeObj} from "../../Types/EpisodeObj";

import AnimeForm from "../Forms/AnimeForm/AnimeForm";
import Title from "../Title/Title";
import Header from "../Header/Header";
import Banner from "../Banner/Banner";
import AnimeView from "../AnimeComponents/AnimeView/AnimeView";
import Gallery from "../Gallery/Gallery";
import {TagOption} from "../../Types/TagOption";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../utils/Theme";
import EpisodeView from "../EpisodeComponents/EpisodeView/EpisodeView";

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
         number: 1,
         name: "Ryomen Sukuna",
         description:
            "Yuuji es un joven que posee un talismán muy poderoso y él ni siquiera es consciente de ello. Pero un día se topa con Fushiguro y su vida dará un cambio radical.",
         date: "Oct 2, 2020",
         thumbnail: `${process.env.PUBLIC_URL}/images/Thumbnails/jujutsu/jujutsu_episode_1.jpg`,
         videoUrl:
            "https://rr3---sn-hp57kn67.c.drive.google.com/videoplayback?expire=1636441477&amp;ei=ReWJYdKiBsCR2LYPgqWm-A0&amp;ip=190.66.117.4&amp;cp=QVRIWEVfUFRVSFhPOko5aGI0dUpuTF9UcU4xdDFCZ3l6YzNqbGt6UklZdmp4VlRFVi1hcWVvams&amp;id=c15bc0e70b53e3d0&amp;itag=22&amp;source=webdrive&amp;requiressl=yes&amp;mh=dl&amp;mm=32&amp;mn=sn-hp57kn67&amp;ms=su&amp;mv=m&amp;mvi=3&amp;pl=20&amp;ttl=transient&amp;susc=dr&amp;driveid=15mi9p2nT10lqj9qJEPHwhnFsGV0U9ohO&amp;app=explorer&amp;mime=video/mp4&amp;vprv=1&amp;prv=1&amp;dur=1428.096&amp;lmt=1612577164086338&amp;mt=1636426821&amp;sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&amp;sig=AOq0QJ8wRgIhAKqRvzG-y_u--XUKyTf4LtqmxfZVEvFcTuD7hzHngPNLAiEA0lqREEVIT0V7jc72ERydv-5caIOZZstvD7zGW-Q5bms=&amp;lsparams=mh,mm,mn,ms,mv,mvi,pl&amp;lsig=AG3C_xAwRAIgERrh-ER7zFYNJsSX583IK8ejVewOAek3SZveW0j_F8QCIFlNfWIJ2o7kgKdu-88Uhtbyz-QbUwOvZm97C_VKykLw&amp;cpn=wlGgmS0mhZD_CWoo&amp;c=WEB_EMBEDDED_PLAYER&amp;cver=1.20211107.00.00",
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
         episodes: [episodeElems[0]],
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

               <Route path="/Forms">
                  <AnimeForm onCreate={handleCreateAnime} tagOptions={tagOptions} addTagOption={handleAddTagOption} />
               </Route>

               <Route path="/Studios"></Route>
            </Switch>
         </HashRouter>
      </ThemeProvider>
   );
}

export default App;
