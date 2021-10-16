import React from "react";
import facebook from "../Images/facebook.svg";
import instaIcon from "../Images/instaicon.svg";
import insta1 from "../Images/insta1.jpg";
import insta2 from "../Images/insta2.jpg";
import insta3 from "../Images/insta3.jpg";
import insta4 from "../Images/insta4.jpg";
function InstaReels() {
	return (
		<>
			<div
				style={{
					flexDirection: "column",
					width: "100%",
					marginTop: "55px",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						marginBottom: "40px",
						justifyContent: "space-between",
						width: "85%",
					}}
				>
					<div
						style={{
							fontSize: "25px",
							fontWeight: "500",
							color: "#333333",
						}}
					>
						Follow us @himalayausa
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							fontSize: "25px",
							justifyContent: "center",
						}}
					>
						<img
							style={{ marginRight: "25px" }}
							alt=""
							src={facebook}
						/>
						<img alt="" src={instaIcon} />
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "row",
						justifyContent: "space-between",
						width: "85%",
						marginBottom: "30px",
					}}
				>
					<img
						style={{ height: "17vw", objectFit: "contain" }}
						alt=""
						src={insta1}
					/>
					<img
						style={{ height: "17vw", objectFit: "contain" }}
						alt=""
						src={insta2}
					/>
					<img
						style={{ height: "17vw", objectFit: "contain" }}
						alt=""
						src={insta3}
					/>
					<img
						style={{ height: "17vw", objectFit: "contain" }}
						alt=""
						src={insta4}
					/>
				</div>
			</div>
		</>
	);
}

export { InstaReels };
