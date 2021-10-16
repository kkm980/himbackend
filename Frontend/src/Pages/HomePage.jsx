import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { HeroComp } from "../Components/HeroComp";
import { Shopbycatg } from "../Components/ShopbyCatg";
import { Textplant } from "../Components/Textplant";
import { TextCardPrent } from "../Components/TextCardPrent";
import { InstaReels } from "../Components/InstaReels";
import { BestSeller } from "../Components/BestSeller";

export default function HomePage() {
	return (
		<div style={{ position: "relative", minHeight: "100vh" }}>
			<Navbar />
			<HeroComp />
			<BestSeller />
			
			<Shopbycatg />
			<Textplant />
			<TextCardPrent />
			<InstaReels />
			<Footer />
		</div>
	);
}
