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

   const vid =
      "https://rr3---sn-hp57kn67.c.drive.google.com/videoplayback?expire=1636441477&amp;ei=ReWJYdKiBsCR2LYPgqWm-A0&amp;ip=190.66.117.4&amp;cp=QVRIWEVfUFRVSFhPOko5aGI0dUpuTF9UcU4xdDFCZ3l6YzNqbGt6UklZdmp4VlRFVi1hcWVvams&amp;id=c15bc0e70b53e3d0&amp;itag=22&amp;source=webdrive&amp;requiressl=yes&amp;mh=dl&amp;mm=32&amp;mn=sn-hp57kn67&amp;ms=su&amp;mv=m&amp;mvi=3&amp;pl=20&amp;ttl=transient&amp;susc=dr&amp;driveid=15mi9p2nT10lqj9qJEPHwhnFsGV0U9ohO&amp;app=explorer&amp;mime=video/mp4&amp;vprv=1&amp;prv=1&amp;dur=1428.096&amp;lmt=1612577164086338&amp;mt=1636426821&amp;sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&amp;sig=AOq0QJ8wRgIhAKqRvzG-y_u--XUKyTf4LtqmxfZVEvFcTuD7hzHngPNLAiEA0lqREEVIT0V7jc72ERydv-5caIOZZstvD7zGW-Q5bms=&amp;lsparams=mh,mm,mn,ms,mv,mvi,pl&amp;lsig=AG3C_xAwRAIgERrh-ER7zFYNJsSX583IK8ejVewOAek3SZveW0j_F8QCIFlNfWIJ2o7kgKdu-88Uhtbyz-QbUwOvZm97C_VKykLw&amp;cpn=wlGgmS0mhZD_CWoo&amp;c=WEB_EMBEDDED_PLAYER&amp;cver=1.20211107.00.00";

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
                  <p className="EpisodeView__Anime">{elem.animeName}</p>
                  <p className="EpisodeView__Name">"{elem.name}"</p>
                  <p className="EpisodeView__Description">{elem.description}</p>
                  <p className="EpisodeView__Date">{elem.date}</p>
               </div>
               <div className="EpisodeView__Controllers">
                  <div></div>
               </div>
            </div>
            <div className="EpisodeView__Player">
               <video controls autoPlay className="EpisodeView__Video" src={elem.videoUrl} />
            </div>
         </section>
         <hr />
         <section className="EpisodeView__Adds"></section>
      </article>
   );
};

export default EpisodeView;
