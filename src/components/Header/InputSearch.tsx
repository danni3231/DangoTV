import * as React from "react";
import "./InputSearch.css";

interface InputSearchProps {}

const InputSearch: React.FC<InputSearchProps> = ({}) => {
   return (
      <div className="inputSearch">
         <input type="text" placeholder="What do you want to search?" />
         <span className="inputSearch__Icon material-icons-round md-dark">search</span>
      </div>
   );
};

export default InputSearch;
