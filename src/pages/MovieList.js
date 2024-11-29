import { MovieCard } from "../components";
import { CustomHook } from "../hooks/custom_hook";
import { useTitleUpdate } from "../hooks/title_update";

export const MovieList = ({api, title}) => {
  const { data: movies } = CustomHook(api);
  let data = movies.results ? movies.results : []
  useTitleUpdate(title)
  return (
    <section className="my-7">
      <div className="flex justify-start flex-wrap">
        {data.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>
    </section>
  );
};
