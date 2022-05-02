import cardStyles from "../styles/Card.module.scss";

const Card = () => {
	return (
		<div className={cardStyles["card"]}>
			<button className="dropdown-btn">Hello</button>
			<div className="dropdown-list">
				<a href="#">Temperture</a>
			</div>
		</div>
	);
};

export default Card;
