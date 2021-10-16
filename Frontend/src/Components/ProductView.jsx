import "../Styles/ProductView.style.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

export default function ProductView() {
	const { id } = useParams();

	const [product, setProducts] = useState({});
	const [loading, setLoading] = useState(true);
	const [frame, setFrame] = useState(1);

	const [counter, setCounter] = useState(1);

	const { cart, updateCart } = useContext(CartContext);

	useEffect(() => {
		showData();
		setLoading(false);
	}, []);
	function showData() {
		axios
			.get(`http://localhost:3555/products/query/${id}`)
			.then((res) => res.data[0])
			.then((res) => setProducts(res));
	}
	const pic1 =
		"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/CurcuminComplete-1_1024x1024.png?v=1595306962";

	const pic2 =
		"https://cdn.shopify.com/s/files/1/0399/1728/9633/products/CurcuminComplete-2_1024x1024.png?v=1595306962";
	return loading ? (
		<div>...Loading</div>
	) : product.name === undefined ? (
		<div>404 NO PRODUCT FOUND</div>
	) : (
		<div className="proContainer">
			<div className="flex1">
				<div>
					<img
						width="521"
						height="494"
						src={
							frame === 0
								? pic1
								: frame === 1
								? product.image
								: pic2
						}
						alt="Product"
					/>
				</div>
				<div className="moreImages">
					<img
						width="88"
						height="88"
						onClick={() => setFrame(0)}
						src={pic1}
						alt="Product"
					/>
					<img
						width="88"
						height="88"
						onClick={() => setFrame(1)}
						src={product.image}
						alt="Product"
					/>
					<img
						width="88"
						height="88"
						onClick={() => setFrame(2)}
						src={pic2}
						alt="Product"
					/>
				</div>
			</div>
			<div>
				<div className="pageHeading">{product.name}</div>
				<div className="priceProduct">{product.price}</div>
				<div>Size: 60 Capsules</div>
				<div>
					{" "}
					<button className="btnCapsule">60 Capsules</button>
					<button className="btnCapsule">120 Capsules</button>
					<button className="btnCapsule">240 Capsules</button>
				</div>
				<div>
					<button
						disabled={counter === 0}
						onClick={() => setCounter((prev) => prev - 1)}
						className="btnQuantity"
					>
						-
					</button>
					{counter}
					<button
						onClick={() => setCounter((prev) => prev + 1)}
						className="btnQuantity"
					>
						+
					</button>
					<button
						onClick={() => {
							updateCart(product, counter);
						}}
						className="btnAddToCart"
					>
						ADD TO CART
					</button>
				</div>
				<div>
					{" "}
					<button className="btnAmazon">
						Buy with amazon pay
					</button>{" "}
				</div>
				<div>Description</div>
				<ul>
					{product.description.map((el, i) => (
						<li key={i}>{el}</li>
					))}
				</ul>
				<div>Recommended Use</div>
				<div>
					<table>
						<tbody>
							<tr>
								<td>Size(Caplets)</td>
								<td>60</td>
								<td>120</td>
								<td>240</td>
							</tr>
							<tr>
								<td>Supply</td>
								<td>15 Days</td>
								<td>1 Month</td>
								<td>2 Months</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div>Adults take 2 capsules twice daily with food</div>
				<div>What's in it?</div>
			</div>
		</div>
	);
}
