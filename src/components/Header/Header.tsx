import * as React from "react";
import "./Header.css";
import NavLink from "./NavLink";
import logo from "../../Data/Images/logo.svg";
import InputSearch from "./InputSearch";

interface HeaderProps {
   banner?: boolean;
}

const Header: React.FC<HeaderProps> = ({banner}) => {
   return (
      <header className="header">
         <div className="header__section">
            <img className="header__logo" src={logo} alt="" />
            <nav>
               <NavLink text="Home" url="" active />
               <NavLink text="News" url="" />
               <NavLink text="Studios" url="" />
               <NavLink text="Social" url="" />
            </nav>
         </div>

         <div className="header__section">
            <InputSearch />
         </div>
      </header>
   );
};

export default Header;
