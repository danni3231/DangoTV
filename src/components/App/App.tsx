import React from "react";
import "./App.css";
import Header from "../Header/Header";

import AnimeElem, {AnimeCardProps} from "../AnimeCard/AnimeCard";

import coverJutjusu from "../../Data/Images/AnimeCovers/jujutsu-kaisen-cover.png";
import AnimeForm from "../AnimeForm/AnimeForm";

type AnimeCardObj = AnimeCardProps & {
    id: number;
};

function App() {
    const [animeElems, setAnimeElems] = React.useState<AnimeCardObj[]>([
        {
            id: Math.random(),
            name: "Jujutsu Kaisen",
            imgUrl: coverJutjusu,
        },
    ]);

    const handleCreate = (newAnimeElem: AnimeCardProps) => {
        console.log("nuevo elemento!", newAnimeElem);

        const arrayCopy = animeElems.slice(); // crear una copia del arreglo
        arrayCopy.push({
            // agregamos el nuevo elemento con la información recibida
            id: Math.random(),
            name: newAnimeElem.name,
            imgUrl: coverJutjusu,
        });

        // creamos un nuevo arreglo
        const newArray = [
            ...animeElems, // ponemos todos los elementos que ya existían
            {
                // agregamos el nuevo elemento con la información recibida
                id: Math.random(),
                name: newAnimeElem.name,
                imgUrl: newAnimeElem.imgUrl,
            },
        ];
        setAnimeElems(arrayCopy);
    };

    return (
        <div className="App">
            <Header />
            <main>
                <div className="gallery__title">
                    <h2>Latest Episodes</h2>
                    <p>See All</p>
                </div>

                <section className="gallery">
                    <div className="gallery__row">
                        {animeElems.map((elem) => {
                            return <AnimeElem key={elem.id} name={elem.name} imgUrl={elem.imgUrl} />;
                        })}
                    </div>
                </section>
                <AnimeForm onCreate={handleCreate} />
            </main>
        </div>
    );
}

export default App;
