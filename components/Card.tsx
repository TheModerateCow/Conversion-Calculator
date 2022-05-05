import cardStyles from "../styles/Card.module.scss";

const Card = () => {
	return (
		<div className={cardStyles["card"]}>
			<button className={cardStyles["card-btn"]}>Temperture</button>
			<div className={cardStyles["card-dropdown"]}>
				<a href="#">Temperture</a>
			</div>
		</div>
	);
};

export default Card;
