import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import bestsell1 from "../Images/bestsell1.png";
import bestsell2 from "../Images/bestsell2.png";
import bestsell3 from "../Images/bestsell3.png";
function BestSeller() {
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
					Best Sellers
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						width: "85%",
					}}
				>
					<div style={{ margin: "20px" }}>
						<img
							alt=""
							style={{ height: "70%", width: "75%" }}
							src={bestsell1}
						/>
						<p>Supplements</p>
						<p>See all Supplements</p>
					</div>
					<div style={{ margin: "20px" }}>
						<img
							alt=""
							style={{ height: "70%", width: "75%" }}
							src={bestsell2}
						/>
						<p>Oral Care</p>
						<p>See all Oral Care</p>
					</div>
					<div style={{ margin: "20px" }}>
						<img
							alt=""
							style={{ height: "70%", width: "75%" }}
							src={bestsell3}
						/>
						<p>Personal Care</p>
						<p>See all Personal Care</p>
					</div>
				</div>
			</div>
		</>
	);
}

export { BestSeller };
