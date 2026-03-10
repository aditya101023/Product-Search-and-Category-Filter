import React, { useState } from 'react';

const productsData = [
  { id: 1, name: "Laptop", category: "Electronics", price: 60000 },
  { id: 2, name: "Headphones", category: "Electronics", price: 2000 },
  { id: 3, name: "T-shirt", category: "Clothing", price: 800 },
  { id: 4, name: "Shoes", category: "Clothing", price: 2500 },
  { id: 5, name: "Coffee Mug", category: "Home", price: 300 }
];

const ProductCard = ({ name, category, price }) => {
  return (
    <div className="product-card" style={{ border: '1px solid #ddd', padding: '1rem', margin: '10px 0', borderRadius: '8px' }}>
      <h3>{name}</h3>
      <p>Category: {category}</p>
      <p>Price: ₹{price}</p>
    </div>
  );
};

const ProductSearch = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = productsData.filter((item) => {
    const matchName = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || item.category === category;
    
    return matchName && matchCategory;
  });

  return (
    <div className="app-container" style={{ fontFamily: 'sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h2>Product Search</h2>
      
      <div className="filters" style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', flex: 1 }}
        />

        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          style={{ padding: '8px' }}
        >
          <option value="All">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Home">Home</option>
        </select>
      </div>

      <div className="product-list">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <ProductCard 
              key={item.id} 
              name={item.name} 
              category={item.category} 
              price={item.price} 
            />
          ))
        ) : (
          <p>No products found</p> 
        )}
      </div>
    </div>
  );
};

export default ProductSearch;
