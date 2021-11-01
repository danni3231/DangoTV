import {EpisodeObj} from "./EpisodeObj";

export type AnimeObj = {
   id: number;
   name: string;
   cover: string;
   description: string;
   tags: string[];
   status: string;

   episodes: EpisodeObj[];
};
