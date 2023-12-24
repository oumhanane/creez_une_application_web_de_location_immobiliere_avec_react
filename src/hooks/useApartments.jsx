import { useState, useEffect } from "react";

export const useApartments = () => {
    const [apartments, setApartments] = useState([]);
    useEffect(() => {
        const abortController = new AbortController();
        fetch("data.json", { signal: abortController.signal })
            .then((res) => res.json())
            .then((data) => setApartments(data)) // Mettez à jour l'état avec les données
            .catch(console.error);

        return () => {
            console.log("cleanup");
            abortController.abort();
        };
    }, []);
    return apartments;  
};