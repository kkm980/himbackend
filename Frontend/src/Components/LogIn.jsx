import "../Styles/Login.style.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

export default function LogIn() {
	const [formData, setFormData] = useState({});
	function handleFormData(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}
	const { auth, putAuth } = useContext(AuthContext);

	function handleSubmit() {
		if (formData.email === undefined || formData.password === undefined)
			return alert("Please enter all the details");

		fetch("http://localhost:3555/users/login", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => {
				return res.json();
			})
			.then((res) => {
				// if (res === undefined) return alert("Invalid Credentials");
				console.log(res);
				if (res.error) alert(res.error.message);
				else {
					putAuth(res._id);
					alert("Success");
				}
			})
			.catch((err) => alert(err.message));
	}
	return auth === "" ? (
		<div className="login-container">
			<div className="pageHeading">Already Registered?</div>
			<div className="form-title loginMargin">Login</div>
			<div className="bodyText">
				E-mail <span className="floatRight">Required Fields</span>{" "}
			</div>
			<input
				value={formData.email}
				onChange={(e) => handleFormData(e)}
				name="email"
				className="inputText"
				type="text"
				placeHolder="Enter Email"
			/>
			<div className="bodyText">Password</div>
			<input
				value={formData.password}
				onChange={(e) => handleFormData(e)}
				name="password"
				type="password"
				className="inputText"
				placeholder="Enter Password"
			/>
			<br />
			<button onClick={() => handleSubmit()} className="btnGreen">
				LOGIN
			</button>
			<div className="forgetLogin">Lost your Password</div>
			<div className="form-title marginTop44 ">New Customer</div>
			<div className="newAccountInfo">
				By creating an account with our store, you will be able to move
				through the checkout process faster, store multiple shipping
				addresses, view and track your orders in your account and more
			</div>
			<Link to="/user/signup">
				{" "}
				<button className="btnGreen darkgreen ">
					CREATE AN ACCOUNT
				</button>
			</Link>
		</div>
	) : (
		<div className="alreadyLoggedIn">
			<div>
				Already Logged In
				<button onClick={() => putAuth("")}>Sign Out</button>
			</div>
			<div>
				<Link to="/products/multi-ingredient%20supplements">
					<button>Products Page</button>
				</Link>
			</div>
		</div>
	);
}
