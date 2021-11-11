import * as React from "react";
import {useHistory} from "react-router";
import {StudioObj} from "../../Types/StudioObj";

interface StudioFormsProps {
   type: "create" | "edit";
   editId: number | null;
   studioElems: StudioObj[];

   onCreate: (newStudioElem: StudioObj) => void;
   onEdit: (editId: number, newStudioElem: StudioObj) => void;
}

const StudioForms: React.FC<StudioFormsProps> = ({type, editId, studioElems, onCreate, onEdit}) => {
   const history = useHistory();

   const editStudioElem = studioElems.find((elem) => {
      return elem.id === editId;
   });

   const [name, setName] = React.useState(editStudioElem?.name || "");
   const handleNameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setName(event.target.value);
   };

   const [description, setDescription] = React.useState(editStudioElem?.description || "");
   const handleDescriptionChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      setDescription(event.target.value);
   };

   const [logo, setLogo] = React.useState(editStudioElem?.logo || "");
   const handleLogoChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setLogo(event.target.value);
   };

   const [date, setDate] = React.useState(editStudioElem?.date || "");
   const handleDateChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
      setDate(event.target.value);
   };

   const isNameValid: boolean = name !== "";
   const isDescriptionValid: boolean = description !== "";
   const isLogoValid: boolean = logo !== "";
   const isDateValid: boolean = date !== "";

   const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event: any) => {
      event.preventDefault();

      if (type === "create" && isNameValid && isDescriptionValid && isLogoValid && isDateValid) {
         const studio: StudioObj = {
            id: Math.random(),
            name: name,
            logo: logo,
            description: description,
            date: date,
            animes: [],
         };
         onCreate(studio);

         history.push("/");
      } else if (type === "edit" && isNameValid && isDescriptionValid && isLogoValid && isDateValid) {
         const studio: StudioObj = {
            id: Math.random(),
            name: name,
            logo: logo,
            description: description,
            date: date,
            animes: [],
         };
         onEdit(editId!, studio);
         history.push("/");
      }
      // si el formulario es válido, llamamos al evento onCreate
   };

   return (
      <section className="Form__Container">
         <form className="Form" onSubmit={handleSubmit}>
            <h2>{type === "create" ? "Create" : "Edit"} StudioObj</h2>
            <label className="input">
               Name
               <input type="text" onChange={handleNameChange} value={name} placeholder="Name" />
            </label>

            <label className="input">
               Logo
               <input type="text" onChange={handleLogoChange} value={logo} placeholder="Cover" />
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

            <button className="Btn">{type === "create" ? "Create" : "Edit"} Studio</button>
         </form>
      </section>
   );
};

export default StudioForms;
