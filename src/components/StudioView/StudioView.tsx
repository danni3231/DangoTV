import * as React from "react";
import "./StudioView.css";
import {Redirect, useParams} from "react-router";
import {AnimeObj} from "../../Types/AnimeObj";
import {StudioObj} from "../../Types/StudioObj";
import Gallery from "../Gallery/Gallery";
import Title from "../Title/Title";

interface StudioViewProps {
   listStudio: StudioObj[];
   listAnime: AnimeObj[];
}

const StudioView: React.FC<StudioViewProps> = ({listStudio}) => {
   const {id: idString} = useParams<{id: string}>();
   const id = parseFloat(idString);

   const elemStudio = listStudio.find((elem) => {
      // return elem.id === parseInt(id);
      if (elem.id === id) {
         return true;
      } else {
         return false;
      }
   });

   if (!elemStudio) {
      return <Redirect to="/404" />;
   }
   return (
      <article className="StudioView">
         <section className="StudioView__Info">
            <img className="StudioView__Logo" src={elemStudio.logo} alt="" />
            <p className="StudioView__Name">{elemStudio.name}</p>
            <p className="StudioView__Description">{elemStudio.description}</p>
            <p className="StudioView__Date">
               <b> Founded:</b> {elemStudio.date}
            </p>

            <Title text="Best Animes" url=""></Title>
            <Gallery type="Anime" listAnime={[]}></Gallery>
         </section>
         <hr />
         <section className="StudioView__News"></section>
      </article>
   );
};

export default StudioView;
