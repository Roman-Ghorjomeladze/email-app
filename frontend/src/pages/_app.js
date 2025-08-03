import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import Head from "next/head";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	const [queryClient] = useState(() => new QueryClient());
	return (
		<>
			<Head>
				<title>Apple Mailer</title>
				<meta name="description" content="Apple Mailer" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main>
				<QueryClientProvider client={queryClient}>
					<Component {...pageProps} />
				</QueryClientProvider>
			</main>
		</>
	);
}
