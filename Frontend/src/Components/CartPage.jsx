import { CartContext } from "../Context/CartContext";
import { useContext } from "react";
import { useEffect} from "react";
import "../Styles/CartPage.style.css";
import CartSection from "../Components/CartSection";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function CartPage() {
	const { cart, totalCartValue, deleteItem , setCartQty} =
		useContext(CartContext);
	const checkPrice = totalCartValue();
	const { auth } = useContext(AuthContext);
	const history = useHistory();
	useEffect(()=>{
		totalCartValue()
	},[cart])
		

	const handlePaymentPage = () => {
		auth === ""
			? history.push("/user/login")
			: history.push("/user/payment");
	};

	return (
		<div style={{ minHeight: 300, textAlign: "center" }}>
			<div className="cartHead">Shopping Cart</div>
			{cart.length === 0 ? (
				<div className="cartEmpty">Cart is empty</div>
			) : (
				cart.map((el) => (
					<CartSection
						key={el.id}
						el={el}
						setCartQty={setCartQty}
						deleteItem={deleteItem}
					/>
				))
			)}
			<div className="proceedPayment">
				<div>Grand Total : ${totalCartValue()}</div>
				{checkPrice > 0 ? (
					<button
						onClick={() => handlePaymentPage()}
						className="proceedPayButton"
					>
						PROCEED TO CHECKOUT
					</button>
				) : (
					<Link to="/products/category">
						<button className="proceedPayButton">
							Go To Shopping Page
						</button>
					</Link>
				)}
			</div>
		</div>
	);
}
