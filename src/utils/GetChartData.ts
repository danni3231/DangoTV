import {AnimeObj} from "../Types/AnimeObj";
import {StudioObj} from "../Types/StudioObj";

export const getChartData = (animeElems: AnimeObj[], studioElems: StudioObj[]) => {
   const counters2: {[key: string]: number} = {};
   const counters: number[] = [];

   const animeNames: string[] = [];

   animeElems.forEach((anime) => {
      animeNames.push(anime.name);
   });

   animeNames.forEach((name) => {
      studioElems.forEach((studio) => {
         studio.animes.forEach((elem) => {
            let rep = 0;
            if (elem.name === name) {
               if (counters2[name]) {
                  counters2[name]++;
               } else {
                  counters2[name] = 1;
               }
            }
            console.log(name + rep);
            counters.push(rep);
         });
      });
   });
   return {
      labels: animeNames,
      datasets: [
         {
            label: "# de apariciones",
            data: Object.values(counters2),
            backgroundColor: ["rgba(54, 162, 235, 0.2)"],
            borderColor: ["rgba(54, 162, 235, 1)"],
         },
      ],
   };
};
