import type { NextPage } from "next";
import homeStyles from "../styles/Home.module.scss";
import Card from "../components/Card";

const Home: NextPage = () => {
	return (
		<div className={homeStyles["home"]}>
			<Card />
		</div>
	);
};
export default Home;
