import "../Styles/Signup.style.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router-dom";

export default function Signup() {
	const [formData, setFormData] = useState({});
	const history = useHistory();
	const { auth, putAuth } = useContext(AuthContext);

	function handleFormData(e) {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	}
	function handleSubmit() {
		if (
			formData.first_name === undefined ||
			formData.last_name === undefined ||
			formData.email === undefined ||
			formData.password === undefined
		)
			return alert("Please enter all the details");

		fetch("http://localhost:3555/users/", {
			method: "POST",
			body: JSON.stringify(formData),
			headers: { "Content-Type": "application/json" },
		})
			.then((res) => res.json())
			.then((res) => {
				if (res.error) alert(res.error.message);
				else {
					alert("Success");
					history.push("/user/login");
				}
			})
			.catch((err) => alert("Error"));
	}
	return auth === "" ? (
		<div className="signup-container">
			<div className="pageHeading">Create an Account</div>
			<div className="form-title signupMargin">Personal Information</div>
			<div className="bodyText">
				First Name <span className="floatRight">Required Fields</span>{" "}
			</div>
			<input
				value={formData.first_name}
				onChange={(e) => handleFormData(e)}
				className="inputText"
				type="text"
				name="first_name"
				placeHolder="Enter First Name"
			/>
			<div className="bodyText">Last Name </div>
			<input
				value={formData.last_name}
				onChange={(e) => handleFormData(e)}
				className="inputText"
				type="text"
				name="last_name"
				placeHolder="Enter Last Name"
			/>
			<div className="bodyText">E-mail </div>
			<input
				value={formData.email}
				onChange={(e) => handleFormData(e)}
				name="email"
				className="inputText"
				type="email"
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
			<button
				onClick={() => {
					handleSubmit();
				}}
				className="btnGreen"
			>
				CREATE
			</button>
			<div className="returnStore">or Return to Store</div>
		</div>
	) : (
		<div className="alreadyLoggedIn">
			<div>
				Already Signed In
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
