import * as React from "react";
import "./News.css";
import {NewsObj} from "../../Types/NewsObj";

interface NewsProps {
   newsElem: NewsObj;
}

const News: React.FC<NewsProps> = ({newsElem}) => {
   return (
      <section className="News">
         <img className="News__Img" src={newsElem.img} alt="" />

         <div className="News__Info">
            <p className="News__Title">{newsElem.title}</p>
            <p>{newsElem.text}</p>
         </div>
      </section>
   );
};

export default News;
