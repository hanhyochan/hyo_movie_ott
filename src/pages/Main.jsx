import { useSelector } from 'react-redux'
import './../App.scss'
import MovieCard from '../component/MovieCard'

function Main() {
    const movieData = useSelector(state => state.movieList)
console.log(movieData)

    return (
        <div className='container'>
            {movieData.map(el => <MovieCard key={el.id} movieList={el} />)}
        </div>
    )
}
export default Main
