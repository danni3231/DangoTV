import * as React from "react";
import {useHistory} from "react-router";
import {AnimeObj} from "../../Types/AnimeObj";
import {Autocomplete, TextField} from "@mui/material";
import {TagOption} from "../../Types/TagOption";

interface AnimeFormProps {
   tagOptions: TagOption[];
   type: "create" | "edit";
   editId: number | null;
   animeElems: AnimeObj[];

   onCreate: (newAnimeElem: AnimeObj) => void;
   addTagOption: (newTagOption: TagOption) => void;
   onEdit: (editId: number, newAnimeElem: AnimeObj) => void;
}

const AnimeForm: React.FC<AnimeFormProps> = ({
   tagOptions,
   type,
   editId,
   animeElems,
   onCreate,
   addTagOption,
   onEdit,
}) => {
   const history = useHistory();

   const editAnimeElem = animeElems.find((elem) => {
      return elem.id === editId;
   });

   const [formSubmitted, setFormSubmitted] = React.useState(false);

   const [name, setName] = React.useState(editAnimeElem?.name || "");
   const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setName(event.target.value);
   };

   const [description, setDescription] = React.useState(editAnimeElem?.description || "");
   const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      setDescription(event.target.value);
   };

   const [cover, setCover] = React.useState(editAnimeElem?.cover || "");
   const handleCoverChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setCover(event.target.value);
   };

   const [status, setStatus] = React.useState(editAnimeElem?.status || "");
   const handleStatusChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setStatus(event.target.value);
      console.log(status);
   };

   const initialTags: TagOption[] = [];

   const [tags, setTags] = React.useState<TagOption[]>(initialTags);
   const handleTagsChange = (event: React.SyntheticEvent<Element, Event>, values: (TagOption | string)[]) => {
      const transformed = values.map((value) => {
         // si el valor es un string, quiere decir que el usurio está agregando una nueva opción
         if (typeof value === "string") {
            const op = {label: value};
            addTagOption(op); // agregamos la nueva opción a la lista general de opciones
            return op;
         }
         return value;
      });
      setTags(transformed);
   };

   //validaciones

   const isNameValid: boolean = name !== "" && name.length >= 5;
   const isDescriptionValid: boolean = description !== "" && name.length >= 5;
   const isCoverValid: boolean = cover !== "";
   const isStatusValid: boolean = status !== "";
   const isTagsValid: boolean = tags !== [];

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
      event.preventDefault();

      const tagsStrings = tags.map((obj) => obj.label);

      if (type === "create" && isNameValid && isDescriptionValid && isCoverValid && isStatusValid && isTagsValid) {
         const anime: AnimeObj = {
            id: Math.random(),
            name: name,
            cover: cover,
            description: description,
            status: status,
            tags: tagsStrings,
            episodes: [],
            studios: [],
         };
         onCreate(anime);

         history.push("/");
      } else if (type === "edit" && isNameValid && isDescriptionValid && isCoverValid && isStatusValid && isTagsValid) {
         const anime: AnimeObj = {
            id: Math.random(),
            name: name,
            cover: cover,
            description: description,
            status: status,
            tags: tagsStrings,
            episodes: [],
            studios: [],
         };
         onEdit(editId!, anime);
         history.push("/");
      }
      // si el formulario es válido, llamamos al evento onCreate
   };

   return (
      <section className="Form__Container">
         <form className="Form" onSubmit={handleSubmit}>
            <h2>{type === "create" ? "Create" : "Edit"} AnimeObj</h2>
            <label className="input">
               Name
               <input type="text" onChange={handleNameChange} value={name} placeholder="Name" />
            </label>

            <label className="input">
               Cover
               <input type="text" onChange={handleCoverChange} value={cover} placeholder="Cover" />
            </label>

            <label className="input">
               Description
               <textarea
                  onChange={handleDescriptionChange}
                  value={description}
                  placeholder="Description"
                  cols={30}
                  rows={10}
               />
            </label>

            <div className="Form__Status">
               <p>Status</p>

               <div className="Form__Status__inputContainer">
                  <div className="input--radio">
                     <input type="radio" name="status" value="Finish" onChange={handleStatusChange} />
                     <label>Finish</label>
                  </div>

                  <div className="input--radio">
                     <input type="radio" name="status" value="In Broadcast" onChange={handleStatusChange} />
                     <label>In Broadcast</label>
                  </div>
               </div>
            </div>

            <Autocomplete
               multiple
               freeSolo
               disableClearable
               style={{
                  width: "100%",
                  margin: "16px",
               }}
               id="combo-box-demo"
               options={tagOptions}
               renderInput={(params) => <TextField {...params} label="Tags" placeholder="Add a tag" />}
               onChange={handleTagsChange}
               value={tags as any}
               isOptionEqualToValue={(option, value) => {
                  return option.label === value.label;
               }}
            />

            <button className="Btn">{type === "create" ? "Create" : "Edit"} Anime</button>
         </form>
      </section>
   );
};

export default AnimeForm;
