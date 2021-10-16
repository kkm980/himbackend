import { useState, createContext } from "react";

export const AuthContext = createContext({ auth: false, toggleAuth: () => {} });

export default function AuthContextProvider({ children }) {
	const [auth, setAuth] = useState("");

	const putAuth = (a) => {
		setAuth(a);
	};

	return (
		<AuthContext.Provider value={{ auth, putAuth }}>
			{children}
		</AuthContext.Provider>
	);
}
