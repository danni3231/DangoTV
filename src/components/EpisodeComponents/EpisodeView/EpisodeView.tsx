import * as React from "react";
import "./EpisodeView.css";
import {Redirect, useParams} from "react-router";
import {EpisodeObj} from "../../../Types/EpisodeObj";

interface EpisodeViewProps {
   list: EpisodeObj[];
}

const EpisodeView: React.FC<EpisodeViewProps> = ({list}) => {
   const {id: idString} = useParams<{id: string}>();
   const id = parseFloat(idString);

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
      <article className="EpisodeView">
         <section className="EpisodeView__Content">
            <div className="EpisodeView__Info">
               <img src={elem.thumbnail} alt="" />
               <div className="EpisodeView__Data">
                  <p className="EpisodeView__Anime">{elem.anime?.name}</p>
                  <p className="EpisodeView__Name">"{elem.name}"</p>
                  <p className="EpisodeView__Description">{elem.description}</p>
                  <p className="EpisodeView__Date">{elem.date}</p>
               </div>
            </div>
            <div className="EpisodeView__Player">
               <div className="EpisodeView__VideoContainer">
                  <iframe src={elem.videoUrl} className="EpisodeView__Video" allow="autoplay" />
               </div>
               <div className="EpisodeView__Controllers">
                  <div className="Btn--Icon Btn--Icon--left">
                     <button className="Btn">Previous</button>
                     <img className="Btn__Icon" src={`${process.env.PUBLIC_URL}/images/General/leftIcon.svg`} alt="" />
                  </div>

                  <div className="Btn--Box">
                     <button className="Btn Btn--Box"></button>
                     <img className="Btn__Icon" src={`${process.env.PUBLIC_URL}/images/General/menuIcon.svg`} alt="" />
                  </div>

                  <div className="Btn--Icon Btn--Icon--right">
                     <button className="Btn">next</button>
                     <img className="Btn__Icon" src={`${process.env.PUBLIC_URL}/images/General/rightIcon.svg`} alt="" />
                  </div>
               </div>
            </div>
         </section>
         <hr />
         <section className="EpisodeView__Adds"></section>
      </article>
   );
};

export default EpisodeView;
