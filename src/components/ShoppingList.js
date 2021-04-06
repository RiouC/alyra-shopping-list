
import { useState } from "react"
import Product from "./Product"

const ShoppingList = (props) => {
	const { shopping, removeFromShoppingList, filter, setFilter } = props

	const filteredList = shopping.filter(el =>
		el.trim().toLowerCase().startsWith(filter.trim().toLowerCase())
	)
	return (
		<>
			<h2 className="mb-3 h4">Produits à acheter : ({shopping.length})</h2>
			<div className="input-group mb-3 rounded">
				<label htmlFor="filter-input">
					<span role="img" aria-label="search" className="input-group-text">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
							<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
						</svg>
					</span>
				</label>
				<input
					type="search"
					name="filter-input"
					placeholder="Rechercher dans votre liste de courses…"
					aria-label="Chercher"
					className="rounded-end border-1 px-2" />
			</div>
			{filter && (
				<p className="d-flex justify-content-between">
					<span>
						Produits qui commencent par <i>{filter}</i>
					</span>
					<button
						className="btn btn-light btn-sm"
						onClick={() => setFilter("")}
					>
						<span role="img" aria-hidden>

						</span>
					Réinitialiser
					</button>
				</p>
			)}
			<ol className="list-group mb-3 shadow">
				{filteredList.map(product => {
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
