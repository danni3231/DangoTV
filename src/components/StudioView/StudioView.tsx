import * as React from "react";
import "./StudioView.css";
import {Redirect, useParams} from "react-router";
import {AnimeObj} from "../../Types/AnimeObj";
import {StudioObj} from "../../Types/StudioObj";
import Gallery from "../Gallery/Gallery";
import Title from "../Title/Title";
import {Bar} from "react-chartjs-2";
import {getChartData} from "../../utils/GetChartData";

interface StudioViewProps {
   listStudio: StudioObj[];
   listAnimes: AnimeObj[];
   onEdit?: (id: number) => void;
}

const StudioView: React.FC<StudioViewProps> = ({listStudio, listAnimes, onEdit}) => {
   const {id: idString} = useParams<{id: string}>();
   const id = parseFloat(idString);

   const handleEdit: React.MouseEventHandler<HTMLButtonElement> = () => {
      if (onEdit) {
         onEdit(id);
      }
   };

   const elemStudio = listStudio.find((elem) => {
      // return elem.id === parseInt(id);
      if (elem.id === id) {
         return true;
      } else {
         return false;
      }
   });

   const data = getChartData(listAnimes, listStudio);

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
            <Gallery type="Anime" listAnime={elemStudio.animes}></Gallery>

            <div className="StudioView__Chart">
               <Bar
                  data={data}
                  options={{
                     indexAxis: "y",
                     // Elements options apply to all of the options unless overridden in a dataset
                     // In this case, we are setting the border of each horizontal bar to be 2px wide
                     elements: {
                        bar: {
                           borderWidth: 2,
                        },
                     },
                     responsive: true,
                     plugins: {
                        legend: {
                           position: "right",
                        },
                        title: {
                           display: true,
                           text: "personajes con mas apariciones",
                        },
                     },
                  }}
               />
            </div>

            <div className="AnimeView__Functions">
               <button className="Btn" onClick={handleEdit}>
                  Edit Studio Info
               </button>
            </div>
         </section>
         <hr />
         <section className="StudioView__News"></section>
      </article>
   );
};

export default StudioView;
