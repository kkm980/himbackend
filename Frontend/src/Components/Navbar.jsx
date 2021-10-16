import logo from "../Images/logoMain.png";
import cartImg from "../Images/cart.png";
import search from "../Images/searchIcon.svg";
import profile from "../Images/profile.png";
import cut from "../Images/cut.png";
import "../Styles/Navbar.style.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Submenu from "./Submenu";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function Navbar() {
	const [account, setAccount] = useState(false);
	const [val, setVal] = useState("");
	const [navSearch, setNavSearch] = useState([]);

	const { auth, putAuth } = useContext(AuthContext);

	const { cart } = useContext(CartContext);
	function fetchSearchtext() {
		try {
			if (val.length) {
				axios
					.get(`http://localhost:3555/products/pro/${val}`)
					.then((res) => res.data)
					.then((res) => {
						setNavSearch(res);
						console.log(res);
					})
					.then(console.log("navSearch", navSearch));
			}
		} catch (e) {
			console.log(e);
		}
	}

	useEffect(() => {
		fetchSearchtext();
		console.log(val, "here");
	}, [val]);

	function showSearch() {
		document.getElementById("searchBox").style.display = "block";
	}
	function hideSearch() {
		document.getElementById("searchBox").style.display = "none";
	}

	function toggleDropdown() {
		setAccount(!account);
	}

	return (
		<div>
			<div style={{ width: "100%" }}>
				<div
					id="searchBox"
					searchbox
					style={{
						width: "100%",
						padding: "0px 15px",
						top: "0px",
						height: "100px",
						position: "fixed",
						display: "none",
						zIndex: "15",
						backgroundColor: "#fff",
					}}
				>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<div
							style={{
								fontSize: "16px",
								lineHeight: "25px",
								color: "#777777",
							}}
						>
							What are you looking for?
						</div>

						<div
							onClick={() => {
								hideSearch();
							}}
						>
							<img src={cut} alt="" />
						</div>
					</div>
					<input
						onChange={(e) => {
							setVal(e.target.value);
						}}
						value={val}
						style={{
							fontSize: "24px",
							fontWeight: "500",
							lineHeight: "22px",
							height: "60px",
							margin: "10px 0 0 0",
							padding: "11px 12px 13px 0px",
							border: "none",
							color: "#333333",
							outline: "none",
							width: "98%",
						}}
						placeholder="Search products..."
					></input>
					<Link to="/products/health%20supplements">
						<img src={search} alt="" />
					</Link>
					<hr style={{ color: "silver", fontSize: "0.2px" }} />
				</div>

				<div
					style={{
						width: "50%",
						position: "absolute",
						left: "0px",
						top: "100px",
						display: "flex",
						flexDirection: "row",
						justifyContent: "center",
						backgroundColor: "#fff",
						zIndex: 16,
					}}
				>
					{navSearch.length
						? navSearch.map((e, i) => {
								return (
									<>
										<div
											style={{
												display: "flex",
												marginLeft: "10%",
												flexDirection: "column",
											}}
										>
											<Link to={`/product/${e.id}`}>
												<div>
													<img
														style={{
															width: "100%",
															height: "100px",
															objectFit:
																"contain",
														}}
														src={e.image}
														alt=""
													/>
												</div>
												<div>{e.name}</div>
												<div>{e.category}</div>
											</Link>
										</div>
									</>
								);
						  })
						: null}
				</div>
			</div>

			<div className="navbar">
				<div>
					<Link to="/">
						<img src={logo} alt="logo"></img>
					</Link>
				</div>
				<div className="navlinks">
					<div className="nav__menu-item">
						<Link
							to="/products/health%20supplements"
							onClick={() => {
								toggleDropdown();
							}}
						>
							Shop
						</Link>
						<Submenu />
					</div>
				</div>
				<div className="navlinks">About</div>
				<Link to="/storeLoc">
					<div className="navlinks">Store Locator</div>
				</Link>
			</div>
			<div style={{ float: "right" }}>
				<img
					style={{ position: "relative", bottom: "7px" }}
					className="navIcon"
					onClick={() => {
						showSearch();
					}}
					src={search}
					alt="cart"
				/>
				<img
					onClick={() => {
						toggleDropdown();
					}}
					className="navIcon"
					src={profile}
					alt="profile"
				/>
				{!account ? null : auth === "" ? (
					<span className="NavDropDown">
						<Link to="/user/login">
							{" "}
							<div>Sign In</div>
						</Link>
						<Link to="/user/signup">
							{" "}
							<div>Register</div>
						</Link>
						<Link to="/cart">
							{" "}
							<div>Checkout</div>
						</Link>{" "}
					</span>
				) : (
					<span className="NavDropDown">
						<Link to="/user/account">
							{" "}
							<div>Account</div>
						</Link>{" "}
						<div
							className="signOutBtnDrop"
							onClick={() => putAuth("")}
						>
							Log Out
						</div>
						<Link to="/cart">
							{" "}
							<div>Checkout</div>
						</Link>{" "}
					</span>
				)}

				<Link to="/cart">
					{" "}
					<img className="navIcon" src={cartImg} alt="cart" />
					{cart.length ? (
						<div
							style={{
								position: "absolute",
								padding: "5px",
								backgroundColor: "#000",
								color: "#fff",
								borderRadius: 10,
								top: 10,
								right: 6,
							}}
						>
							{cart.length}
						</div>
					) : null}
				</Link>
			</div>
			<div style={{ clear: "both" }}></div>
		</div>
	);
}
