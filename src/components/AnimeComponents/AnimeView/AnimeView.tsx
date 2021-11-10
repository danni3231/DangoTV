import * as React from "react";
import "./AnimeView.css";
import {Redirect, useHistory, useParams} from "react-router";
import {AnimeObj} from "../../../Types/AnimeObj";
import Title from "../../Title/Title";
import Gallery from "../../Gallery/Gallery";
import {StudioObj} from "../../../Types/StudioObj";

interface AnimeViewProps {
   list: AnimeObj[];
}

const AnimeView: React.FC<AnimeViewProps> = ({list}) => {
   const {id: idString} = useParams<{id: string}>();
   const id = parseFloat(idString);

   const history = useHistory();

   const handleViewStudio = (id: number) => () => {
      history.push(`/studio-details/${id}`);
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
            {/* llenar este espacio */}
         </section>
         <section className="AnimeView__Episodes">
            <Title text="Episodes" url={""}></Title>
            <Gallery type="Episode" listEpisode={elem.episodes} withoutPadding />
         </section>
      </article>
   );
};

export default AnimeView;
