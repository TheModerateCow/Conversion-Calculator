import cardStyles from "../styles/Card.module.scss";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { InputLabel, MenuItem, SelectChangeEvent } from "@mui/material";
import { useState } from "react";

const Card = () => {
	const [unit, setUnit] = useState<string>("");

	const handleChange = (event: SelectChangeEvent) => {
		setUnit(event.target.value as string);
	};

	return (
		<div className={cardStyles["card"]}>
			<section className="top-section">
				<FormControl fullWidth size="small">
					<InputLabel id="title">Unit</InputLabel>
					<Select
						labelId="title"
						id="title-select"
						value={unit}
						label="Unit"
						onChange={handleChange}
					>
						<MenuItem value={"temperture"}>Temperture</MenuItem>
						<MenuItem value={"weight"}>Weight</MenuItem>
						<MenuItem value={"speed"}>Speed</MenuItem>
						<MenuItem value={"time"}>Time</MenuItem>
					</Select>
				</FormControl>
			</section>
			<section className="mid-section"></section>
		</div>
	);
};

export default Card;
