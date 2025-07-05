import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Apple Mailer</title>
				<meta name="description" content="Apple Mailer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main>
				<Component {...pageProps} />
			</main>
		</>
	);
}
