import * as React from "react";
import "./AnimeForm.css";
import {AnimeCardProps} from "../AnimeCard/AnimeCard";
import {useHistory} from "react-router";
import {AnimeObj} from "../../Types/AnimeObj";

interface AnimeFormProps {
   onCreate: (newAnimeElem: AnimeObj) => void;
}

const AnimeForm: React.FC<AnimeFormProps> = ({onCreate}) => {
   const history = useHistory();

   const [formSubmitted, setFormSubmitted] = React.useState(false);

   const [name, setName] = React.useState("");
   const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setName(event.target.value);
   };

   const [url, setUrl] = React.useState("");
   const handleUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setUrl(event.target.value);
   };

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
      event.preventDefault();
      setFormSubmitted(true);
      //if (isTitleValid && isUrlValid) {
      console.log("valid");
      // si el formulario es válido, llamamos al evento onCreate
      const anime: AnimeObj = {
         id: Math.random(),
         name: name,
         cover: url,
         description: "Something",
         status: "Finish",
         tags: ["Tag 1", "Tag 2", "Tag 3"],
         episodes: [],
      };
      onCreate(anime);

      history.push("/");
   };

   return (
      <form className="AnimeForm" onSubmit={handleSubmit}>
         <h2>Create animeCard</h2>
         <label className="input">
            name
            <input type="text" onChange={handleNameChange} value={name} placeholder="Name" />
         </label>

         <label className="input">
            Image Url
            <input type="text" onChange={handleUrlChange} value={url} placeholder="Image Url" />
         </label>

         <button>Create</button>
      </form>
   );
};

export default AnimeForm;
