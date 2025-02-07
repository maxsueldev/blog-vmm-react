import { useContext } from "react";
import { AppContext } from "../../context";
import CardArtigo from "../../components/CardArtigo";

export default function Home() {
    const { artigos } = useContext(AppContext);

    return (
        <main>
            {artigos.map(artigo => (
                <CardArtigo key={artigo.id} artigo={artigo} />
            ))}
        </main>
    );
}