export default function Moviecard({title,year, genre, director, actors, awards, plot, image}) {
	
	return (
		<article>
			<img className="poster"
				src={image}
				alt=""
			/>
			<h3 className="movie-title">{title}</h3>
			<span className="year">({year})</span>
            <span className="plot">{plot}</span>
			<span className="genre">Genre: {genre}</span>
			<span className="director">Director: {director}</span>
			<span className="actors">Actors: {actors}</span>
			<span className="awards">Awards: {awards}</span>
		</article>
	);
}