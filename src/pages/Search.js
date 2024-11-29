import { useSearchParams } from "react-router-dom"
import { CustomHook } from "../hooks/custom_hook"
import { MovieCard } from "../components"
import { useTitleUpdate } from "../hooks/title_update";



export const Search = ({api}) => {
  const [queryParams] = useSearchParams()
  useTitleUpdate(`Search Result ${queryParams.get("q")}`)
  const { data: movies} = CustomHook(api, queryParams.get("q"))
  let data = movies.results ? movies.results : []
  return (
    <section>
      <div className="flex justify-start flex-wrap">
        {data.map((movie, index) => (
          <MovieCard key={index} data={movie} />
        ))}
      </div>
    </section>
  )
}
