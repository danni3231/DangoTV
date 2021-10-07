import * as React from "react";
import "./Title.css";

interface TitleProps {
    text: string;
    url: string;
}

const Title: React.FC<TitleProps> = ({text, url}) => {
    return (
        <div className="Title">
            <h2>{text}</h2>
            <a href={url}>See All</a>
        </div>
    );
};

export default Title;
