import { useContext } from "react";
import { AppContext } from "../../context";
import CardArtigo from "../../components/CardArtigo";

import './style.scss';

export default function Home() {
    const { artigos } = useContext(AppContext);

    return (
        <main className="main">
            {artigos.map(artigo => (
                <CardArtigo key={artigo.id} artigo={artigo} />
            ))}
        </main>
    );
}