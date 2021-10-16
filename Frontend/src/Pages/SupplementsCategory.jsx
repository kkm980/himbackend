import { useEffect, useState } from "react";
import ProductCardDisplay from "../Components/ProductCardDisplay";
import axios from "axios";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../Styles/Products.style.css";
import { useParams } from "react-router-dom";

export default function SupplementsCategory() {
	const [pageCount, setPageCount]=useState(1);
	const [products, setProducts] = useState([]);
	const [sortAsc, setSortAsc] = useState(false);
	const [sortName, setSortName] = useState(false);
	const [loading, setLoading] = useState(true);
	const [bloodSugar,setBloodSugar]=useState(false);
	const [digestion,setDigestion]=useState(false);
	const [showNext,setShowNext]=useState(true);

	const { category } = useParams();
	useEffect(() => {
		setTimeout(() => {
			fetchData();
		}, 1000);
		
	}, [sortAsc, sortName, pageCount, bloodSugar, digestion]);
	function fetchData() {
		axios
			.get("http://localhost:3555/products")
			.then((res) => res.data)
			// .then((res) => res.length=pageCount*6)
			.then((res) => {
				setLoading(false);
				console.log(res);
				// console.log(pageCount);
				
				if(bloodSugar && digestion){
					res=res.filter(el=> el.type==="Digestion"||el.type==="Blood Sugar");
					console.log(res);
				}
				else if(bloodSugar){
					res = res.filter(el => el.type === "Blood Sugar");
					console.log(res);
				}
				else if(digestion){
					res = res.filter(el => el.type === "Digestion");
					console.log(res);
				}


				if(res.length>pageCount*6)
				{
					res.length=pageCount*6;
					setShowNext(true)
				}
				else{
					setShowNext(false)
				}
				
				return sortAsc === 1
					? setProducts(res.sort((a, b) => a.price - b.price))
					: sortAsc === 2
					? setProducts(res.sort((a, b) => b.price - a.price))
					: sortName === 1
					? setProducts(
							res.sort((a, b) => {
								if (a.name < b.name) {
									return -1;
								}
								if (a.name > b.name) {
									return 1;
								}
								return 0;
							})
					  )
					: sortName === 2
					? setProducts(
							res.sort((a, b) => {
								if (a.name < b.name) {
									return 1;
								}
								if (a.name > b.name) {
									return -1;
								}
								return 0;
							})
					  )
					: setProducts(res);
			});
	}

	return (
		<div>
			<Navbar />
			<div className="productPageTitle">{category.toUpperCase()}</div>
			<div className="textAlignProduct">
				<button
					style={{
						backgroundColor: sortName === 1 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortName(1);
						setSortAsc(0);
					}}
				>
					Sort by Name Asc
				</button>
				<button
					style={{
						backgroundColor: sortName === 2 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortName(2);
						setSortAsc(0);
					}}
				>
					Sort by Name Desc
				</button>
				<button
					style={{
						backgroundColor: sortAsc === 1 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortAsc(1);
						setSortName(0);
					}}
				>
					Sort by Price Asc
				</button>
				<button
					style={{
						backgroundColor: sortAsc === 2 ? "#66765F" : "#A3B49B",
					}}
					onClick={() => {
						setSortAsc(2);
						setSortName(0);
					}}
				>
					Sort by Price Desc
				</button>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<div style={{ width: "270px" }}>
					<ul className="categoryLeftSec">
						<li className="active">Health Interests</li>
						<li style={{fontWeight:bloodSugar?"900":"normal"}} onClick={()=>{setBloodSugar(!bloodSugar)}}>Blood Sugar</li>
						<li>Brain & Cognitive</li>
						<li style={{fontWeight:digestion?"900":"normal"}} onClick={()=>{setDigestion(!digestion)}}>Digestion </li>
						<li>Energy & Vitality</li>
						<li>Respiratory</li>
						<hr />
						<li>Herbal Supplements</li>
						<li>All</li>
						<li>Single Herbs</li>
						<li>Formula</li>
						<li>Product From</li>
						<li>Herbs</li>
					</ul>
				</div>

				<div
					style={{
						display: "flex",
						flexWrap: "wrap",
						width: "952px",
					}}
				>
				{loading?<div style={{paddingLeft:"50%",paddingTop:"20px", fontSize:"25px"}}>Loading...</div>:null}
					{products.map((el) => (
						<ProductCardDisplay key={el.id} product={el} />
					))}
				</div>
			</div>
			{showNext&& loading===false?
			  (<div style={{display:"flex",width:"100%",marginBottom:"30px", justifyContent:"space-around"}}><button onClick={()=>{setPageCount(pageCount+1); console.log(pageCount)}} style={{backgroundColor:"white", color:"blue",width:"100px",height:"50px",fontSize:"15px", fontWeight:"500"}}>Show more</button></div>):(null)
			}
			
			<Footer />
		</div>
	);
}
