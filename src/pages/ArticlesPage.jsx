import { useEffect } from "react";

const ArticlesPage = () => {
	useEffect(() => {
		document.title = "Articles";
	}, []);

	return (
		<main className="text-white items-center justify-center sm:pt-0 bg-black flex flex-1 flex-col">
			<h1 className="title-font font-medium text-white text-5xl mb-2 text-center">
				We are preparing the Articles.
			</h1>
		</main>
	);
};

export default ArticlesPage;
