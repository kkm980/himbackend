import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

export default function SuccessPage() {
	return (
		<div>
			<Navbar />
			<div style={{ textAlign: "center" }}>
				<img
					src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/31fe3938221437.5968c5a847d93.gif"
					alt="success"
					width="800"
				/>
				<div>
					<Link to="/products/Supplements">
						<button
							style={{
								background: "#a3b49b",
								padding: "20px 50px",
								color: "#fff",
								fontSize: "18px",
							}}
						>
							Continue Shopping
						</button>
					</Link>
				</div>
			</div>
			<Footer />
		</div>
	);
}
