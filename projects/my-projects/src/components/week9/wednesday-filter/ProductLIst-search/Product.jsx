// import { useState } from "react";


// const ProductGrid = () => {
//   const [filters, setFilters] = useState({ searchText: "",inStockOnly: false,});
    
//     const Products=[
//          {id:1,title:"kitenge bag",price:2300,category:'women',inStock:true},
//          {id:2,title:"leather bag",price:2500,category:'men',inStock:false},
//          {id:3,title:"woolen bag",price:300,category:'kids',inStock:false},
//          {id:4,title:"cotton bag",price:1000,category:'women',inStock:true},
//          {id:5,title:"crochet bag",price:900,category:'men',inStock:true}   
//     ]
    
//     const filteredProducts = products.filter((product) =>{
//         const matchSearch=product.title
//         .toLowerCase()
//         .include(filters.searchText.toLowerCase())

//         const matchStock=filters.inStockOnly ? product.inStock:true
//          return matchSearch && matchStock
//     } )

//     return (
//         <div>
//             <h1>Product Grid</h1>
//             <input type="text" 
//             placeholder="search Product"
//             value={filters.searchText}
//             onChange={(e)=>setFilters({...filters,searchText:e.target.value})}
//             />

            
//             <input type="checkbox" 
//             checked={filters.inStockOnly}
//             onChange={(e)=>setFilters({...filters,inStockOnly:e.target.checked})}
//             />

//             {filteredProducts.length === 0 ?(
//             <p>No products found.</p>

//             ) : (
//                 ...
//             )}

//             <div>
//             {filteredProducts.map((product) => (
//             <div key={product.id}>
//             <h4>{product.title}</h4>
//             <p>${product.price}</p>
//             <p>{product.category}</p>
//              <span>{product.inStock ? "In Stock" : "Out of Stock"}</span>
//              </div>
// ))}

//         </div>


//     )
    
// }

import React, { useState } from "react";

const ProductGrid = () => {
  const [filters, setFilters] = useState({ searchText: "", inStockOnly: false });

  const products = [
    { id: 1, title: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { id: 2, title: "Headphones", price: 150, category: "Electronics", inStock: false },
    { id: 3, title: "Coffee Mug", price: 12, category: "Kitchen", inStock: true },
    { id: 4, title: "Notebook", price: 5, category: "Stationery", inStock: true },
    { id: 5, title: "Smartphone", price: 800, category: "Electronics", inStock: false },
  ];

  const filteredProducts = products.filter(({ title, inStock }) => {
    const matchesSearch = title.toLowerCase().includes(filters.searchText.toLowerCase());
    const matchesStock = filters.inStockOnly ? inStock : true;
    return matchesSearch && matchesStock;
  });

  const updateFilter = (key) => (e) =>
    setFilters((prev) => ({ ...prev, [key]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  return (
    <div>
      <h2>Product Grid</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={filters.searchText}
        onChange={updateFilter("searchText")}
      />

      <label>
        <input
          type="checkbox"
          checked={filters.inStockOnly}
          onChange={updateFilter("inStockOnly")}
        />
        {" "}Show In Stock Only
      </label>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        filteredProducts.map(({ id, title, price, category, inStock }) => (
          <div key={id}>
            <h4>{title}</h4>
            <p>${price}</p>
            <p>{category}</p>
            <span>{inStock ? "In Stock" : "Out of Stock"}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductGrid;
