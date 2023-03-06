export default function Moviecard({title,year, genre, director, actors, awards, plot}) {
	// tittel, år publisert, sjanger, regissør, skuespillere og eventuelle priser i en fornuftig HTML-struktur.
	return (
		<article>
			<img className="poster"
				src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
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