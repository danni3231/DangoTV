import {Autocomplete, TextField} from "@mui/material";
import * as React from "react";
import {useHistory} from "react-router";
import {EpisodeObj} from "../../Types/EpisodeObj";
import {studioOption} from "../../Types/StudiosOption";

interface EpisodeFormProps {
   studioOptions: studioOption[];
   type: "create" | "edit";
   editId: number | null;
   episodeElems: EpisodeObj[];

   onCreate: (newEpisodeElem: EpisodeObj, studioId: number) => void;
   onEdit: (editId: number, newEpisodeElem: EpisodeObj) => void;
}

const EpisodeForm: React.FC<EpisodeFormProps> = ({studioOptions, type, editId, episodeElems, onCreate, onEdit}) => {
   const history = useHistory();

   const editEpisodeElem = episodeElems.find((elem) => {
      return elem.id === editId;
   });

   const [name, setName] = React.useState(editEpisodeElem?.name || "");
   const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setName(event.target.value);
   };

   const [number, setNumber] = React.useState(`${editEpisodeElem?.number}` || "");
   const handleNumberChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setNumber(event.target.value);
   };

   const [description, setDescription] = React.useState(editEpisodeElem?.description || "");
   const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      setDescription(event.target.value);
   };

   const [date, setDate] = React.useState(editEpisodeElem?.date || "");
   const handleDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setDate(event.target.value);
   };

   const [thumbnail, setThumbnail] = React.useState(editEpisodeElem?.thumbnail || "");
   const handleThumbnailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setThumbnail(event.target.value);
   };

   const [videoUrl, setVideoUrl] = React.useState(editEpisodeElem?.videoUrl || "");
   const handleVideoUrlChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setVideoUrl(event.target.value);
   };

   const [studioId, setStudioId] = React.useState<number>(0.59);

   const handleStudioIdChange = (event: React.SyntheticEvent<Element, Event>, values: studioOption) => {
      setStudioId(values.id);
   };

   const isNameValid: boolean = name !== "" && name.length >= 5;
   const isNumberValid: boolean = number !== "";
   const isDescriptionValid: boolean = description !== "";
   const isDateValid: boolean = date !== "";
   const isThumbnailValid: boolean = thumbnail !== "";
   const isVideoUrl: boolean = videoUrl !== "";
   const isStudiosId: boolean = studioId !== 0.59;

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
      event.preventDefault();

      if (
         type === "create" &&
         isNameValid &&
         isNumberValid &&
         isDescriptionValid &&
         isDateValid &&
         isThumbnailValid &&
         isVideoUrl &&
         isStudiosId
      ) {
         const episode: EpisodeObj = {
            id: Math.random(),
            name: name,
            number: parseInt(number),
            description: description,
            date: date,
            thumbnail: thumbnail,
            videoUrl: videoUrl,

            anime: undefined,
            studio: undefined,
         };

         onCreate(episode, studioId);

         history.push("/");
      } else if (
         type === "edit" &&
         isNameValid &&
         isNumberValid &&
         isDescriptionValid &&
         isDateValid &&
         isThumbnailValid &&
         isVideoUrl &&
         isStudiosId
      ) {
         const episode: EpisodeObj = {
            id: editEpisodeElem?.id!,
            name: name,
            number: parseInt(number),
            description: description,
            date: date,
            thumbnail: thumbnail,
            videoUrl: videoUrl,

            anime: editEpisodeElem?.anime!,
            studio: editEpisodeElem?.studio!,
         };

         onEdit(editId!, episode);
      }
      // si el formulario es v??lido, llamamos al evento onCreate
   };

   return (
      <section className="Form__Container">
         <form className="Form" onSubmit={handleSubmit}>
            <h2>{type === "create" ? "Create" : "Edit"} EpisodeObj</h2>

            <label className="input">
               Name
               <input type="text" onChange={handleNameChange} value={name} placeholder="Cover" />
            </label>

            <label className="input">
               Number
               <input type="number" onChange={handleNumberChange} value={number} placeholder="Cover" />
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

            <label className="input">
               Date
               <input type="text" onChange={handleDateChange} value={date} placeholder="Cover" />
            </label>

            <label className="input">
               Thumbnail
               <input type="text" onChange={handleThumbnailChange} value={thumbnail} placeholder="Cover" />
            </label>

            <label className="input">
               VideoUrl
               <input type="text" onChange={handleVideoUrlChange} value={videoUrl} placeholder="Cover" />
            </label>

            <Autocomplete
               disableClearable
               style={{
                  width: "100%",
                  margin: "16px",
               }}
               id="combo-box-demo"
               options={studioOptions}
               getOptionLabel={(option) => option.label}
               renderInput={(params) => <TextField {...params} label="Studios" placeholder="Add a tag" />}
               onChange={handleStudioIdChange}
               //value={tags as any}
               isOptionEqualToValue={(option, value) => {
                  return option.label === value.label;
               }}
            />

            <button className="Btn">{type === "create" ? "Create" : "Edit"} Episode</button>
         </form>
      </section>
   );
};

export default EpisodeForm;
