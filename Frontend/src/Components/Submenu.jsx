import { Link } from "react-router-dom";

export default function Submenu() {
	return (
		<div className="nav__submenu">
			<div
				style={{ display: "flex", marginLeft: 140 }}
				className="nav__submenu-item "
			>
				<div>
					<div
						className="subMenuDropDown"
						style={{ display: "flex" }}
					>
						<div>
							<li class="navdropHead">Herbal Supplements</li>
							<li>
								<Link to="/products/single%20herb%20supplements">
									Single Herb Supplements
								</Link>
							</li>
							<li>
								<Link to="/products/multi-ingredient%20supplements">
									Multi-Ingredient Supplements
								</Link>
							</li>
						</div>
						<div>
							<li class="navdropHead">Oral Care</li>
							<li>
								<Link to="/products/adult%20toothpaste">
									Adult Toothpaste
								</Link>
							</li>
							<li>
								<Link to="/products/kids%20toothpaste">
									Kids Toothpaste
								</Link>
							</li>
						</div>
						<div>
							<li class="navdropHead">Personal Care</li>
							<li>
								<Link to="/products/face%20care">
									Face Care
								</Link>
							</li>
							<li>
								<Link to="/products/cleansing%20bars">
									Cleansing Bars
								</Link>
							</li>
							<li>
								<Link to="/products/balm">Balm</Link>
							</li>
						</div>
					</div>
					<hr />
					<div
						className="subMenuDropDown"
						style={{ display: "flex" }}
					>
						<div className="navdropHead margin5">
							Health Interests
						</div>
					</div>
					<div
						style={{ display: "flex" }}
						className="subMenuDropDown"
					>
						<div>
							<li>
								<Link to="/products/blood%20sugar">
									Blood Sugar
								</Link>
							</li>
							<li>
								<Link to="/products/brain%20&%20cognitive">
									Brain & Cognitive
								</Link>
							</li>
							<li>
								<Link to="/products/digestion">Digestion</Link>
							</li>
							<li>
								<Link to="/products/energy%20vitality">
									Energy & Vitality
								</Link>
							</li>
							<li>
								<Link to="/products/hair,%20skin%20&%20nails">
									Hair, Skin & Nails
								</Link>
							</li>
							<li>
								<Link to="/products/heart%20&Cardio">
									Heart & Cardio
								</Link>
							</li>
						</div>
						<div>
							<li>
								<Link to="/products/immune%20support">
									Immune Support
								</Link>
							</li>
							<li>
								<Link to="/products/join%20&%20mobility">
									Join & Mobility
								</Link>
							</li>
							<li>
								<Link to="/products/liver%20cleanse">
									Liver & Cleanse
								</Link>
							</li>
							<li>
								<Link to="/products/men's%20wellness">
									Men's Wellness
								</Link>
							</li>
							<li>
								<Link to="/products/respiratory">
									Respiratory
								</Link>
							</li>
							<li>
								<Link to="/products/sleep">Sleep</Link>
							</li>
						</div>
						<div>
							<li>
								<Link to="/products/stress%20&%20mood">
									Stress & Mood
								</Link>
							</li>
							<li>
								<Link to="/products/urinary">Urinary</Link>
							</li>
							<li>
								<Link to="/products/weight%20management">
									Weight Management
								</Link>
							</li>
							<li>
								<Link to="/products/women's%20wellness">
									Women's Wellness
								</Link>
							</li>
						</div>
					</div>
				</div>
				<div className="dropDownImage">
					<div>
						<img
							width="312"
							height="303"
							src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/HUSA_Ashwagandha_90ct_Carton_Bottle_410x.jpg?v=1603142607"
							alt=""
						/>
					</div>
					<div style={{ textAlign: "center" }}>
						<button className="btnDropFeatured">
							Featured Product
						</button>
						<div>Find out why everyone loves bestselling</div>
						<div>Organic Ashwagandha</div>
					</div>
				</div>
			</div>
		</div>
	);
}
