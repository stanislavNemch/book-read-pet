import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
    const get = () =>
        typeof window !== "undefined"
            ? window.matchMedia(query).matches
            : false;
    const [matches, setMatches] = useState(get);

    useEffect(() => {
        const mql = window.matchMedia(query);
        const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, [query]);

    return matches;
}
