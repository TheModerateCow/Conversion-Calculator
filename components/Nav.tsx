// import Link from "next/link";
import React from "react";
import navStyles from "../styles/Nav.module.scss";

const Nav = () => {
	return (
		<nav className={navStyles["nav"]}>
			<h1 className={navStyles["nav-title"]}>Temperture Conversion</h1>
			{/* <ul>
				<li>
					<Link href="/">
						<a href="">Celsius to Fahrenheit</a>
					</Link>
				</li>
				<li>
					<a href="/">Fahrenheit to Celsius</a>
				</li>
			</ul> */}
		</nav>
	);
};

export default Nav;
