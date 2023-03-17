import Moviecard from "./Moviecard";

export default function Searchresults({ movieList, setSelectedID }) {
	/* Her fikk jeg tips av medstudent (Magnus/Gray i UIN-Discord) til å filtrere ut slik at nettsiden ikke kræsjer når
	den returnerer undefined, som den gjør innimellom. */
	if (movieList !== undefined) {
		return movieList.map((mov, index) => (
			<Moviecard
				key={index}
				image={mov.Poster}
				title={mov.Title}
				year={mov.Year}
				id={mov.imdbID}
				setSelectedID={setSelectedID}
			/>
		));
	} else {
		return <h3 className="no-match">No matches - check your spelling</h3>;
	}
}
