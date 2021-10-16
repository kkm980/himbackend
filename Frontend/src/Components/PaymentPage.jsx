import "../Styles/PaymentPage.style.css";
import logo from "../Images/logoMain.png";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

export default function PaymentPage() {
	const { cart, totalCartValue, emptyCart } = useContext(CartContext);
	const { auth } = useContext(AuthContext);
	const history = useHistory();
	function handlePayment() {
		const orderData = {};
		cart.forEach((el) => (orderData[el.name] = el.quantity));
		const obj = {
			order_ids: [orderData],
		};

		axios
			.patch(`http://localhost:3555/users/purchase/${auth}`, obj)
			.then((res) => res.data)
			.then((res) => console.log(res))
			.then(emptyCart())
			.then(history.push("/user/success"))
			.catch((err) => console.error(err.message));
	}

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div className="paymentAddressSec">
				<img src={logo} alt="logo"></img>
				<div className="expressCheckout">Express checkout</div>
				<button
					onClick={() => handlePayment()}
					className="btnPay purple"
				>
					Shop pay
				</button>
				<button
					onClick={() => handlePayment()}
					className="btnPay yellow"
				>
					Amazon pay
				</button>
				<button
					onClick={() => handlePayment()}
					className="btnPay black"
				>
					G pay
				</button>
				<hr />
				<div className="paymentSubHead">Contact information</div>
				{/* <div className="accountInfoPay">
					<div>Yoon Hoo (yaanhoo61@gamil.com) </div>
					<div>Log Out</div>
				</div> */}
				<div>
					<input type="checkbox" />
					<span>Keep me up to data on news and offers</span>
				</div>

				<div className="paymentSubHead">Shipping address</div>
				<div style={{ display: "flex" }}>
					<div className="borderInput">
						First Name (optional)
						<input className="inputForm" type="text" />
					</div>
					<div className="borderInput">
						Last Name
						<input className="inputForm" type="text" />
					</div>
				</div>
				<div className="borderInput">
					<input
						className="inputForm"
						type="text"
						placeholder="Address"
					/>
				</div>
				<div className="borderInput">
					<input
						className="inputForm"
						type="text"
						placeholder="Apartment, suite, etc. (optional)"
					/>
				</div>
				<div className="borderInput">
					<input
						className="inputForm"
						type="text"
						placeholder="City"
					/>
				</div>
				<div style={{ display: "flex" }}>
					<div className="borderInput">
						Country/region
						<div>
							<input className="inputForm threeDiv" type="text" />
						</div>
					</div>
					<div className="borderInput">
						State
						<div>
							<input className="inputForm threeDiv" type="text" />
						</div>
					</div>
					<div className="borderInput">
						ZIP code
						<div>
							<input className="inputForm threeDiv" type="text" />
						</div>
					</div>
				</div>
				<div className="borderInput">
					<input
						type="text"
						className="inputForm"
						placeholder="Phone"
					/>
				</div>
				<Link to="/products/health%20supplements">
					{" "}
					<button className="btnPaymentGreen">
						Continue to shipping
					</button>
				</Link>
				<Link to="/cart">
					<button className="btnPaymentWhite">Return to cart</button>
				</Link>
			</div>
			<div className="paymentCartSec">
				<div>
					{cart.map((el) => (
						<div key={el.id} style={{ margin: "10px" }}>
							<img widht="70" height="48" src={el.image} alt="" />{" "}
							<span style={{ marginLeft: 50 }}>{el.name}</span>
							<span
								style={{
									marginLeft: 50,
									paddingTop: 20,
									float: "right",
								}}
							>
								{" "}
								$ {(el.price * el.quantity).toFixed(2)}
							</span>
						</div>
					))}
				</div>
				<hr />
				<input type="text" placeholder="Discount code" />
				<button>Apply</button>
				<hr />
				<div>
					Subtotal{" "}
					<span style={{ float: "right" }}>
						$ {totalCartValue()}{" "}
					</span>{" "}
				</div>
				<div>
					Shipping{" "}
					<span style={{ float: "right" }}>
						$ {totalCartValue()}{" "}
					</span>{" "}
				</div>
				<hr />
				<div>
					Total{" "}
					<span style={{ float: "right" }}>$ {totalCartValue()}</span>{" "}
				</div>
			</div>
		</div>
	);
}
