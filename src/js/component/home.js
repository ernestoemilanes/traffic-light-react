import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState(["red"]);
	useEffect(
		() => {
			const interval = setInterval(() => {
				color === "red"
					? setColor("green")
					: color === "yellow"
						? setColor("red")
						: color === "green"
							? setColor("yellow")
							: null;
			}, 5000);
			return () => clearInterval(interval);
		},
		[color]
	);
	return (
		<div className="text-center mt-5">
			<ul className="trafficLight">
				<li
					onClick={() => setColor("red")}
					className={color === "red" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("yellow")}
					className={color === "yellow" ? "selected" : ""}
				/>
				<li
					onClick={() => setColor("green")}
					className={color === "green" ? "selected" : ""}
				/>
			</ul>
		</div>
	);
}
