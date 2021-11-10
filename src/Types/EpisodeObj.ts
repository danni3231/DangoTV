import {AnimeObj} from "./AnimeObj";
import {StudioObj} from "./StudioObj";

export type EpisodeObj = {
   id: number;
   name: string;
   number: number;
   description: string;
   date: string;
   thumbnail: string;
   videoUrl: string;

   anime: AnimeObj | undefined;
   studio: StudioObj | undefined;
};
