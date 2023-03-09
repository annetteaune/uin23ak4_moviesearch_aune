export default function Moviecard({
	title,
	year,
	genre,
	director,
	actors,
	awards,
	plot,
	image,
}) {
	return (
		<article>
			<img className="poster" src={image} alt="" />

			<div className="article-container">
				<h3 className="movie-title">{title}</h3>
				<span className="card-info">({year})</span>
				<span className="plot">{plot}</span>
				<div>
					<span className="card-info">Genre:</span>{" "}
					<span className="card-value">{genre}</span>
				</div>
				<div>
					<span className="card-info">Director:</span>{" "}
					<span className="card-value">{director}</span>
				</div>
				<div>
					<span className="card-info">Actors: </span>
					<span className="card-value">{actors}</span>
				</div>

				<div>
					<span className="card-info">Awards:</span>{" "}
					<span className="card-value">{awards}</span>
				</div>
			</div>
		</article>
	);
}
