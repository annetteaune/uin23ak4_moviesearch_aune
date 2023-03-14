import { useState } from "react";
import { Link } from "react-router-dom";

export default function Moviecard({ title, year, image, id, setSelectedID }) {


	const saveID = (event) => {
		setSelectedID(event.target.id);
	};


	//placeholderbilde hvis poster ikke eksisterer
	if (image === "N/A"){
		image = "https://placehold.jp/200x300.png";
		
	}else{
		image=image
	}

	return (
		<article className="movie-card">
			<h2 className="movie-title">
				{title}
				<span aria-label="release year"> ({year})</span>
			</h2>

			<img className="poster" src={image} alt="" />
			<Link to="/details">
				<button id={id} className="details-btn" onClick={saveID}>
					See details
				</button>
			</Link>
		</article>
	);
}

