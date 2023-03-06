export default function Moviecard() {
	// tittel, år publisert, sjanger, regissør, skuespillere og eventuelle priser i en fornuftig HTML-struktur.
	return (
		<article>
			<img className="poster"
				src="https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673.png"
				alt=""
			/>
			<h3 className="movie-title">Tittel</h3>
			<span className="year">Publiseringsår</span>
			<span className="genre">Sjanger</span>
			<span className="director">Reggisør</span>
			<span className="actors">Skuespillerliste</span>
			<span className="price">Pris</span>
		</article>
	);
}