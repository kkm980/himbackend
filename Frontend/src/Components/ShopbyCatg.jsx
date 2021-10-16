import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import catg1 from "../Images/catg1.jpg";
import catg2 from "../Images/catg2.png";
import catg3 from "../Images/catg3.png";
import catg4 from "../Images/catg4.png";

function Shopbycatg() {
	//    const [best,setBest] =useState([]);

	const bestSell = async () => {
		try {
			const data = await axios.get("http://localhost:3555/products/", {
				params: {
					_page: 1,
					_limit: 4,
				},
			});
			const resp = await data.data;
			console.log(resp);
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		bestSell();
		//    console.log(best);
	}, []);

	return (
		<>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "520px",
					flexDirection: "column",
					width: "100%",
				}}
			>
				<div
					style={{
						display: "flex",
						height: "63px",
						fontSize: "30px",
						fontWeight: "500",
						lineHeight: "40px",
						flexDirection: "row",
						justifyContent: "center",
						width: "70%",
					}}
				>
					Shop By Category
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						width: "85%",
					}}
				>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "15px",
						}}
					>
						<img
							alt=""
							style={{ height: "268px", width: "268px" }}
							src={catg1}
						/>
						<p style={{ fontSize: "16px" }}>Organic Ashwagandha</p>
						<p>See all Supplements</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "15px",
						}}
					>
						<img
							alt=""
							style={{ height: "268px", width: "268px" }}
							src={catg2}
						/>
						<p style={{ fontSize: "16px" }}>
							Simply Mint whitening toothpaste
						</p>
						<p>See all Oral Care</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "15px",
						}}
					>
						<img
							alt=""
							style={{ height: "268px", width: "268px" }}
							src={catg3}
						/>
						<p style={{ fontSize: "16px" }}>Liv Care</p>
						<p>See all Personal Care</p>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							margin: "15px",
						}}
					>
						<img
							alt=""
							style={{ height: "268px", width: "268px" }}
							src={catg4}
						/>
						<p style={{ fontSize: "16px" }}>Immuno Care</p>
						<p>See all Personal Care</p>
					</div>
				</div>
			</div>
		</>
	);
}

export { Shopbycatg };
