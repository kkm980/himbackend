import "../Styles/Footer.style.css";
import { CgFacebook } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer() {
	return (
		<div className="footer">
			<div className="footerFlex">
				<div>
					<div className="footerHead">Info</div>
					<div className="footerLinks">Contact Us</div>
					<div className="footerLinks">FAQ</div>
					<div className="footerLinks">Blog</div>
					<div className="footerLinks">Store Locator </div>
					<div className="footerLinks">Careers</div>
				</div>
				<div>
					<div className="footerHead">Policies</div>
					<div className="footerLinks">Shipping & Returns</div>
					<div className="footerLinks">Terms and Conditions</div>
					<div className="footerLinks">Privacy</div>
					<div className="footerLinks">CCPA</div>
					<div className="footerLinks">Accessibility</div>
				</div>
				<div>
					<div className="footerHead">Contact Us</div>
					<div className="footerContact firstMail ">Email:</div>
					<div className="footerContactLinks">
						writetous@himalayausa.com
					</div>
					<div className="footerContact">Phone:</div>
					<div className="footerContactLinks">1-800-869-4640 </div>
					<div className="footerContactInfo">Mon-Fri, 8am-5pm CT</div>
					<div className="footerContact">Mail:</div>
					<div className="footerContactInfo">Himalaya Wellness</div>
					<div className="footerContactLinks">
						1101 Gillingham Lane{" "}
					</div>
					<div className="footerContactLinks">
						Sugar Land, TX 77478​
					</div>
				</div>
				<div>
					<div className="footerHead">
						Subscribe to Our Newsletter!
					</div>
					<div>
						<input
							className="footerLinks footerInput"
							type="text"
							placeholder="Enter your e-mail"
						/>{" "}
					</div>
					<div className="footerLinks">writetous@himalayausa.com</div>
					<div className="footerLinks terms">
						By entering your email, you agree to our Terms &
						Conditions and Privacy Policy.
					</div>
					<div className="footerHead">
						Follow Us: <CgFacebook /> <FaTwitter />
						<FiInstagram /> <AiFillYoutube />{" "}
					</div>
				</div>
			</div>
			<div className="footerRights">
				© 2021 Himalaya Wellness. All rights reserved.
			</div>
			<div className="footerEnd">
				*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG
				ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT,
				CURE OR PREVENT ANY DISEASE.
			</div>
		</div>
	);
}
