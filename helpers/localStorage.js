import { useState, useEffect } from "react";

export function useLocalStorage() {
    const [value, setValue] = useState("");
    useEffect(() => {
        const stored = localStorage.getItem("token");
        setValue(stored ? JSON.parse(stored) : "");
    }, []);

    useEffect(() => {
        localStorage.setItem("token", JSON.stringify(value));
    }, [value]);

    
    return [value, setValue] ;
};
