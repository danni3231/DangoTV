import {EpisodeObj} from "./EpisodeObj";
import {StudioObj} from "./StudioObj";

export type AnimeObj = {
   id: number;
   name: string;
   cover: string;
   description: string;
   tags: string[];
   status: string;

   episodes: EpisodeObj[];
   studios: StudioObj[];
};
