import * as React from "react";
import "./AnimeForm.css";
import {AnimeCardProps} from "../AnimeCard/AnimeCard";

interface AnimeFormProps {
    onCreate: (newAnimeElem: AnimeCardProps) => void;
}

const AnimeForm: React.FC<AnimeFormProps> = ({onCreate}) => {
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
        onCreate({
            name: name,
            imgUrl: url,
        });
        /*}
         else {
            console.log("invalid");
        }*/
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
