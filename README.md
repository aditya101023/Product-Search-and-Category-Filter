# [cite_start]Build a Product Search and Category Filter [cite: 1, 2]

[cite_start]A React application that displays a list of products[cite: 4]. [cite_start]The product list updates dynamically as the user types in the search box or selects a category filter[cite: 8].

## Features
* [cite_start]**Real-Time Search:** Search products by name[cite: 5]. [cite_start]The list updates in real time [cite: 24][cite_start], and the search is fully case insensitive[cite: 25].
* [cite_start]**Category Filtering:** Filter products by category[cite: 6]. [cite_start]Users can choose between All, Electronics, Clothing, or Home[cite: 32]. [cite_start]When a category is selected, only products from that category appear[cite: 33].
* [cite_start]**Product Details:** Display all products in a list or card layout[cite: 13]. [cite_start]Each product shows its Name, Category, and Price[cite: 14, 15, 16, 17].
* [cite_start]**Empty States:** Displays "No products found" if a search or filter combination yields no matching results[cite: 59].

## Tech Stack
This project was built using:
* [cite_start]React Functional Components [cite: 61]
* [cite_start]`useState` hook for state management [cite: 62]
* [cite_start]Array `filter()` method for search logic [cite: 63]
* [cite_start]Props for passing product data [cite: 64]
* [cite_start]Controlled input fields [cite: 65]

## How to Run Locally
1. Clone this repository.
2. Open your terminal and navigate to the project folder.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to launch the app in your browser.
