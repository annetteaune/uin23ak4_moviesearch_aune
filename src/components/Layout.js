import Moviecard from "./Moviecard";

export default function Layout() {
	return (
		<>
			<header>
				<h1>Filmsøk</h1>
                <span>Her skal det være en søkebar</span>
			</header>
			<main>
                <span>Her skal det være en liste med filmkort</span>
                <Moviecard />
            </main>
            <footer><span>Footer</span></footer>
		</>
	);
}
