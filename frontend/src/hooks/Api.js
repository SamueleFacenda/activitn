import { useEffect, useState } from "react";

const API_URL = 'http://localhost:3000/api';



function useQuery(path, options){
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const { signal } = controller;
        setIsLoading(true);
        fetch(`${API_URL}${path}`, { ...options, signal }).then((response) => {
            if (response.ok)
                return response.json();
            else
                throw new Error("Failed to fetch data");
        }).then((data) => {
            setData(data);
        }).catch((error) => {
            setError(error);
        }).finally(() => {
            setIsLoading(false);
        });
        return () => controller.abort()
    }, [path, options]);

    return [ isLoading, data, error ];
}

export { useQuery };