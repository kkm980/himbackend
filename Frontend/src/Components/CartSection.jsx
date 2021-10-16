import { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";

export default function CartSection({ el,setCartQty , deleteItem }) {
	const [counter, setCounter] = useState(el.quantity);

	return (
		<div style={{ display: "flex", justifyContent: "center" }}>
			<div style={{ margin: 35 }}>
				<RiDeleteBinLine
					size="40px"
					onClick={() => {
						deleteItem(el.id);
					}}
				/>
			</div>

			<img width="198" height="136" src={el.image} alt="" />
			<div className="cartProTitle width250 ">{el.name} </div>
			<div className="cartProTitle">$ {el.price} </div>
			<div className="cartProCounter">
				<button
					disabled={counter === 0}
					onClick={() => {
						setCounter((prev) => prev - 1);
						setCartQty(el, counter);
					}}
					className="btnQuantity"
				>
					-
				</button>
				{counter}
				<button
					onClick={() => {
						setCounter((prev) => prev + 1);
						setCartQty(el, counter);
					}}
					className="btnQuantity"
				>
					+
				</button>
			</div>
			<div className="cartProTitle wid80 ">
				{(el.price * counter).toFixed(2)}{" "}
			</div>
		</div>
	);
}
