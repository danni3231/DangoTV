import * as React from "react";
import "./Header.css";
import NavLink from "./NavLink/NavLink";
import InputSearch from "./InputSearch/InputSearch";
import {useHistory} from "react-router";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
   const history = useHistory();

   const handleHomeClick: any = () => {
      history.push("/");
   };

   return (
      <header className="header">
         <div className="header__section">
            <img
               className="header__logo"
               src={`${process.env.PUBLIC_URL}/images/General/logo.svg`}
               alt=""
               onClick={handleHomeClick}
            />
            <nav>
               <NavLink text="Forms" url="/Forms" />
               <NavLink text="Studios" url="/Studios" />
            </nav>
         </div>

         <div className="header__section">
            <InputSearch />
         </div>
      </header>
   );
};

export default Header;
