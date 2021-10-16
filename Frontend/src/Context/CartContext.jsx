import { useState, createContext } from "react";

export const CartContext = createContext([]);

export default function CartContextProvider({ children }) {
	const [cart, setCart] = useState([]);

	function deleteItem(objId) {
		const updated = cart.filter((el) => el.id !== objId);
		setCart(updated);
	}

	function totalCartValue() {
		let total = 0;
		cart.forEach((el) => {
			total += el.price * el.quantity;
		});
		return total.toFixed(2);
	}

	const updateCart = (obj, quantity) => {
		let product = cart.filter((el) => el.id === obj.id);
		product = product[0];

		if (product) {
			product.quantity += quantity;
			const updated = cart.map((el) => (el.id === obj.id ? product : el));
			
			setCart(updated);

		} else {
			setCart([...cart, { ...obj, quantity: quantity }]);
			alert("Product Added to the cart");
		}
	};
	const setCartQty = (obj, quantity) => {
		let product = cart.filter((el) => el.id === obj.id);
		product = product[0];

		
			product.quantity = quantity;
			const updated = cart.map((el) => (el.id === obj.id ? product : el));
			
			setCart(updated);

		 
	};

	function emptyCart() {
		setCart([]);
	}

	return (
		<CartContext.Provider
			value={{ cart, updateCart, totalCartValue, deleteItem, emptyCart,setCartQty }}
		>
			{children}
		</CartContext.Provider>
	);
}
