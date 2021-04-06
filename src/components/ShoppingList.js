
import { useState } from "react"
import Product from "./Product"

const ShoppingList = (props) => {
	const { shopping, removeFromShoppingList, filter, setFilter } = props

	//const filtered = () => { }
	return (
		<>
			<h2 className="mb-3 h4">Produits à acheter : ({shopping.length})</h2>
			<div className="input-group mb-3">
				<span role="img" aria-label="search" className="input-group-text">
				</span>
				<input
					type="search"
					placeholder="Rechercher dans votre liste de courses…"
					aria-label="Chercher" />
			</div>
			{filter && (
				<p className="d-flex justify-content-between">
					<span>
						Produits qui commencent par <i>{filter}</i>
					</span>
					<button className="btn btn-light btn-sm" onClick={() => alert("ShoppingList filtered ?")}>
					</button>
				</p>
			)}
			<ol className="list-group mb-3 shadow">
				{shopping.map(product => {
					return (
						<li className="list-group-item" key={product}>
							<Product
								product={product}
								shopping={shopping}
								removeFromShoppingList={removeFromShoppingList} />
						</li>
					)
				})}
			</ol>
		</>
	)
}

export default ShoppingList;
