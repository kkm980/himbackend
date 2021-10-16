import heroImg from "../Images/heroImg.jpg";
import "../Styles/HomePage.style.css";
import { Link } from "react-router-dom";

export function HeroComp() {
	return (
		<>
			<div>
				<img alt="" src={heroImg} width="100%" height="550px" />
				<div className="heroShopDiv">
					<p className="heroTitle">ASHWANGANDHA</p>
					<div className="heroSubText">
						A star performer for stress and energy in a
					</div>
					<div className="heroSubText">potent, organic caplet</div>
					<div>
						<Link to="/product/8">
							<button className="btnHero">SHOP NOW</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
