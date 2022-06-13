import cardStyles from "../styles/Card.module.scss";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import {
	InputLabel,
	MenuItem,
	SelectChangeEvent,
	TextField,
	InputAdornment,
	Input,
	FormHelperText,
} from "@mui/material";
import { useState } from "react";

const units = [
	{
		unit: "temperture",
		symbol1: "°C",
		symbol2: "°F",
	},
	{
		unit: "weight",
		symbol1: "kg",
		symbol2: "lbs",
	},
	{
		unit: "speed",
		symbol1: "m/s",
		symbol2: "ft/s",
	},
	{
		unit: "distance",
		symbol1: "m",
		symbol2: "ft",
	},
];

const Card = () => {
	const [unit, setUnit] = useState<string>("");

	const handleChange = (event: SelectChangeEvent) => {
		setUnit(event.target.value as string);
	};

	const handleUnitChange1 = (unit: string) => {
		for (let i = 0; i < units.length; i++) {
			if (units[i].unit === unit) {
				return units[i].symbol1;
			}
		}
	};

	const handleUnitChange2 = (unit: string) => {
		for (let i = 0; i < units.length; i++) {
			if (units[i].unit === unit) {
				return units[i].symbol2;
			}
		}
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
						<MenuItem value={"distance"}>Distance</MenuItem>
					</Select>
				</FormControl>
			</section>
			<section className="mid-section">
				<TextField
					sx={{ m: 1, width: "25ch" }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								{handleUnitChange1(unit)}
							</InputAdornment>
						),
					}}
					variant="standard"
				/>
				<TextField
					sx={{ m: 1, width: "25ch" }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="start">
								{handleUnitChange2(unit)}
							</InputAdornment>
						),
					}}
					variant="standard"
				/>
			</section>
		</div>
	);
};

export default Card;
