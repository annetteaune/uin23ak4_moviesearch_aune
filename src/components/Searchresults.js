import Moviecard from "./Moviecard";


export default function Searchresults({movieList}) {


	return (
		<>
			{movieList.map((mov, index) => (
				<Moviecard
					key={index}
                    image={mov.Poster}
					title={mov.Title}
					year={mov.Year}
					plot="Et kort sammendrag av filmen."
					genre="sjanger"
					director="regissør"
					actors="skusepillere"
					awards="priser"
				/>
			))}
		</>
	);
}