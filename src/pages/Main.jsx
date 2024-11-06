// import { useSelector } from 'react-redux'
import './../App.scss'
import MovieCard from '../component/MovieCard'
// import movieListData from '././assets/data'

function Main() {
    // const movieData = useSelector(state => state.movieList)
console.log(movieListData)

    return (
        <div className='container'>
            {movieData.map(el => <MovieCard key={el.id} movieList={el} />)}
        </div>
    )
}
export default Main
