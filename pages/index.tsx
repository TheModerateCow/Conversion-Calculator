import type { NextPage } from "next";
import homeStyles from "../styles/Home.module.scss";
import Card from "../Components/Card";

const Home: NextPage = () => {
	return (
		<div className={homeStyles["home"]}>
			<Card />
		</div>
	);
};
export default Home;
