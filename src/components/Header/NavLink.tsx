import * as React from "react";
import "./NavLink.css";

interface NavLinkProps {
    text: string;
    active?: boolean;
    url: string;
}

const NavLink: React.FC<NavLinkProps> = ({ text, active, url }) => {
    let className = "Link";
    if (active) {
        className += " Link--active";
    }

    return (
        <a className={className} href={url}>
            {text}
        </a>
    );
};

export default NavLink;
