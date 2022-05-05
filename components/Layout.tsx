import React, { ReactNode } from "react";
import Head from "next/head";
import Nav from "./Nav";

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Head>
				<title>Temperture Conversion</title>
				<meta property="og:title" content="Temperture Conversion" key="title" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>
			<div>
				<Nav />
				{children}
			</div>
		</>
	);
};

export default Layout;
