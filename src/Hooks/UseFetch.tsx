import { useEffect, useState } from "react";
import axios from "axios";

type Repository = {
    id: number,
    name: string,
    full_name: string,
    description: string,
    owner: {
        avatar_url: string,
    },
    login: string,
    url: string
}

const API = axios.create({
    baseURL: 'https://api.github.com/'
});

export function useFecth<T = unknown>(url: string) {

    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        API.get(url)
            .then(response => {
                setData(response.data);
            })
            .catch(err =>{
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return { data, error, isLoading }
}