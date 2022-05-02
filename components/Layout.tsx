import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";
import Card from "./Card";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Head>
				<title>Temperture Conversion</title>
				<meta property="og:title" content="Temperture Conversion" key="title" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<Nav />
			<Card />
		</div>
	);
};

export default Layout;
