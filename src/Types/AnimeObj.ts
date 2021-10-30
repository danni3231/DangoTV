import {EpisodeObj} from "./EpisodeObj";

export type AnimeObj = {
   id: number;
   name: string;
   cover: string;

   episodes: EpisodeObj[];
};
