import * as React from "react";
import "./AnimeView.css";
import {Redirect, useHistory, useParams, Route} from "react-router";

import {AnimeObj} from "../../../Types/AnimeObj";
import {studioOption} from "../../../Types/StudiosOption";
import {EpisodeObj} from "../../../Types/EpisodeObj";

import Title from "../../Title/Title";
import Gallery from "../../Gallery/Gallery";
import EpisodeForm from "../../Forms/EpisodeForm/EpisodeForm";
import NavLink from "../../Header/NavLink/NavLink";

interface AnimeViewProps {
   list: AnimeObj[];
   studioOptions: studioOption[];
   onCreateEpisode: (AnimeId: number, newEpisodeElem: EpisodeObj, studioId: number) => void;
   onEdit?: (id: number) => void;
}

const AnimeView: React.FC<AnimeViewProps> = ({list, studioOptions, onCreateEpisode, onEdit}) => {
   const {id: idString} = useParams<{id: string}>();
   const id = parseFloat(idString);

   const history = useHistory();

   const handleViewStudio = (id: number) => () => {
      history.push(`/studio-details/${id}`);
   };

   const handleCreateEpisodeElem = (newEpisodeElem: EpisodeObj, studioId: number) => {
      onCreateEpisode(id, newEpisodeElem, studioId);
   };

   const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
      if (onEdit) {
         onEdit(id);
      }
   };

   const handleShowForm: React.MouseEventHandler<HTMLButtonElement> = () => {
      history.push(`/anime-details/${id}/new-episode`);
   };

   const elem = list.find((elem) => {
      // return elem.id === parseInt(id);
      if (elem.id === id) {
         return true;
      } else {
         return false;
      }
   });

   if (!elem) {
      return <Redirect to="/404" />;
   }

   return (
      <article className="AnimeView">
         <section className="AnimeView__Info">
            <img className="AnimeView__Image" src={elem.cover} alt="Anime--Cover.png" />
            <div className="AnimeView__Data">
               <p className="AnimeView__Name">{elem.name}</p>
               <div className="AnimeView__Tags">
                  {elem.tags.map((tag, i) => {
                     return (
                        <div className="AnimeView__Tag" key={i}>
                           {tag}
                        </div>
                     );
                  })}
               </div>
               <p className="AnimeView__Description">{elem.description}</p>
               <p className="AnimeView__Studios">
                  <b> Studios: </b>
                  {elem.studios.map((studio) => {
                     return (
                        <span key={studio.id} className="color clickable" onClick={handleViewStudio(studio.id)}>
                           {studio.name}
                        </span>
                     );
                  })}
               </p>
               <p className="AnimeView__Status">{elem.status}</p>
            </div>
         </section>
         <section className="AnimeView__Episodes">
            <Title text="Episodes" url={""}></Title>
            <Gallery type="Episode" listEpisode={elem.episodes} />

            <div className="AnimeView__Functions">
               <button className="Btn" onClick={handleShowForm}>
                  Add Episode
               </button>

               <button className="Btn" onClick={handleEdit}>
                  Edit Anime Info
               </button>
            </div>
         </section>

         <Route path="/anime-details/:id/new-episode">
            <EpisodeForm onCreate={handleCreateEpisodeElem} studioOptions={studioOptions} />
         </Route>
      </article>
   );
};

export default AnimeView;
