import * as React from "react";
import "./Banner.css";
import {BannerObj} from "../../Types/BannerObj";

interface BannerProps {
   animeList: BannerObj[];
}

const Banner: React.FC<BannerProps> = ({animeList}) => {
   const [currentIndex, setCurrentIndex] = React.useState(0);
   const [name, setName] = React.useState(animeList[0].name);
   const [img, setImg] = React.useState(animeList[0].img);

   const styles: React.CSSProperties = {
      backgroundImage: `url(${img})`,
   };

   const handleChangeBanner = (index: number) => () => {
      setName(animeList[index].name);
      setImg(animeList[index].img);
      setCurrentIndex(index);
   };

   return (
      <article className="Banner" style={styles}>
         <img src="" alt="" />
         <h1 className="Banner__Name">{name}</h1>
         <section className="Banner__Btns">
            {animeList.map((elem, i, arr) => {
               return (
                  <div
                     key={elem.id}
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
