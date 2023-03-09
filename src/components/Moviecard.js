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
			<h3 className="movie-title">
				{title}
				<span className="card-info"> ({year})</span>
			</h3>
			<div className="article-container">
				<img className="poster" src={image} alt="" />

				<ul>
					<li className="card-info">Genre:</li>
					<li className="card-value">{genre}</li>
					<li className="card-info">Director:</li>
					<li className="card-value">{director}</li>
					<li className="card-info">Actors: </li>
					<li className="card-value">{actors}</li>
					<li className="card-info">Awards:</li>
					<li className="card-value">{awards}</li>
				</ul>
			</div>
			<span className="plot">{plot}</span>
		</article>
	);
}
