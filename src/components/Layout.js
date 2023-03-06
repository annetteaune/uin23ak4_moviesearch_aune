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
                <Moviecard />
            </main>
            <footer><span>Footer</span></footer>
		</>
	);
}
