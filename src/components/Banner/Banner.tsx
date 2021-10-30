import * as React from "react";
import "./Banner.css";
import {AnimeCardProps} from "../AnimeCard/AnimeCard";

interface BannerProps {
   animes: {img: string; name: string}[];
}

const Banner: React.FC<BannerProps> = ({animes}) => {
   const [currentIndex, setCurrentIndex] = React.useState(0);
   const [name, setName] = React.useState(animes[0].name);
   const [img, setImg] = React.useState(animes[0].img);

   const styles: React.CSSProperties = {
      backgroundImage: `url(${img})`,
   };

   const handleChangeBanner = (index: number) => () => {
      setName(animes[index].name);
      setImg(animes[index].img);
      setCurrentIndex(index);
   };

   return (
      <article className="Banner" style={styles}>
         <img src="" alt="" />
         <h1 className="Banner__Name">{name}</h1>
         <section className="Banner__Btns">
            {animes.map((elem, i, arr) => {
               return (
                  <div
                     className={currentIndex === i ? "Banner__BtnNav Banner__BtnNav--selected" : "Banner__BtnNav"}
                     onClick={handleChangeBanner(i)}
                  />
               );
            })}
         </section>
      </article>
   );
};

export default Banner;
