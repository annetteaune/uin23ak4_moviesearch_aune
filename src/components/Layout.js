import Moviecard from "./Moviecard";
import Search from "./Search";

export default function Layout() {
	return (
		<>
			<header>
				<h1>Another Movie Database</h1>
                <Search />
			</header>
			<main>
                <Moviecard title="tittel" year="år" plot="et kort sammendrag av filmen" genre="sjanger" director="reggisør" actors="skusepillere" awards="priser"/>
            </main>
            <footer><span>Footer</span></footer>
		</>
	);
}
