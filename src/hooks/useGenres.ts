
import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
}
// refactoring, instead of a backendcall a static object is used
// const useGenres = () => useData<Genre>('/genres');

const useGenres = () => ({data: genres, isLoading: false, error: null}) ;

export default useGenres;