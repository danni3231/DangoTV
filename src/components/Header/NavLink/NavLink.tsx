import * as React from "react";
import {NavLink as Rlink} from "react-router-dom";
import "./NavLink.css";

interface NavLinkProps {
   text: string;
   url: string;
}

const NavLink: React.FC<NavLinkProps> = ({text, url}) => {
   return (
      <Rlink className="Link" activeClassName="Link--active" to={url}>
         {text}
      </Rlink>
   );
};

export default NavLink;
