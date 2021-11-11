import {AnimeObj} from "./AnimeObj";

export type StudioObj = {
   id: number;
   name: string;
   logo: string;
   description: string;
   date: string;

   animes: AnimeObj[];
};
