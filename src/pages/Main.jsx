import { useSelector } from 'react-redux'
import './../App.scss'
import MovieCard from '../component/MovieCard'

function Main() {
    const data = useSelector(state => state.movieList)
    const movieDetailData = useSelector(state => state.movieDetail)
    const movieData = data.map(el => ({
        id: el.id,
        img: el.poster_path,
        title: el.title,
        voteAverage: el.vote_average
    })) 
    console.log(movieData) 
    console.log(movieDetailData)
    return (
        <div className='container'>
            {movieData.map(el => <MovieCard key={el.id} movieList={el} />)}
        </div>
    )
}
export default Main

