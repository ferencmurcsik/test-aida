import useData from "./useData";
import { Genre } from "./useGenres";

// map HTTP result to local objecs
export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: string[];
    metacritic: number;
    rating_top: number;
}

const useGames = (selectedGenre : Genre | null) => useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id] );



export default useGames;