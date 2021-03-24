import React from "react";
import "./Home.css";
import Banner from "./1.jpg";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<img className="home__image" src={Banner} alt="" />

			{/* Product Component row */}
			<div className="home__row">
				<Product
					id="35350"
					title="Dell G3 15.6 inch FHD 120Hz 250nits"
					price={773.72}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71XqcYXepxL._AC_SX679_.jpg"
					}
				/>
				<Product
					id="35351"
					title="Plantronics Blackwire 3200 Stereo Corded"
					price={32.88}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/615t%2BvFNcdL._AC_SX425_.jpg"
					}
				/>
			</div>

			{/* Product Component row */}
			<div className="home__row">
				<Product
					id="35352"
					title="Fitbit Versa 2 Health & Fitness Smartwatch"
					price={199.0}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/61SR8ZTgJlL._AC_SX679_.jpg"
					}
				/>
				<Product
					id="35353"
					title="Ultrasport Kids Ski Jacket Polyfill Alpine"
					price={35.32}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/81wI2cuJxLL._AC_UX679_.jpg"
					}
				/>
				<Product
					id="35354"
					title="Vans Realm Backpack Black"
					price={29.95}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/91yXAYJIYgL._AC_SY741_.jpg"
					}
				/>
			</div>

			{/* Product Component row */}
			<div className="home__row">
				<Product
					id="35355"
					title="Neutrogena T/Gel Therapeutic Shampoo"
					price={6.64}
					rating={5}
					image={
						"https://images-na.ssl-images-amazon.com/images/I/71EwsM2LK%2BL._AC_SX425_.jpg"
					}
				/>
			</div>
		</div>
	);
}

export default Home;
