import { createContext, useEffect } from "react";
import { useState } from "react";

const AppContext = createContext();
AppContext.displayName = "AppContext";

function AppProvider({ children }) {
    const [artigos, setArtigos] = useState([]);

    async function fetchArtigos() {
        try {
            await fetch('https://json-server-max.vercel.app/artigos')
                .then(response => response.json())
                .then(data => setArtigos(data));
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        fetchArtigos();
    }, []);

    return <AppContext.Provider value={{ artigos }}>
        {children}
    </AppContext.Provider>;
}

export { AppContext, AppProvider };