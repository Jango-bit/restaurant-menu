import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      category: "Coffee",
      items: [
        { name: "Espresso", description: "Strong and bold, our signature espresso", price: "$3.50" },
        { name: "Cappuccino", description: "Perfect balance of espresso, steamed milk, and foam", price: "$4.25" },
        { name: "Latte", description: "Smooth espresso with steamed milk", price: "$4.50" },
        { name: "Cold Brew", description: "Slow-steeped for 18 hours for a smooth flavor", price: "$4.75" },
        { name: "Mocha", description: "Espresso with chocolate and steamed milk", price: "$4.95" },
        { name: "Americano", description: "Espresso with hot water", price: "$3.75" }
      ]
    },
    {
      category: "Pastries",
      items: [
        { name: "Croissant", description: "Buttery, flaky pastry", price: "$3.25" },
        { name: "Danish Pastry", description: "Sweet pastry with fruit filling", price: "$3.75" },
        { name: "Blueberry Muffin", description: "Fresh blueberries in every bite", price: "$3.50" },
        { name: "Cinnamon Roll", description: "Swirled with cinnamon and icing", price: "$4.25" },
        { name: "Scone", description: "Choice of blueberry, cranberry, or plain", price: "$3.25" },
        { name: "Banana Bread", description: "Homemade with ripe bananas", price: "$3.95" }
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-playfair font-bold text-center text-amber-900 mb-4">Our Menu</h2>
        <p className="text-center text-amber-700 mb-16 max-w-2xl mx-auto">
          Discover our selection of handcrafted coffees, freshly baked pastries, and delicious meals made with locally sourced ingredients.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-full font-semibold">All Menu</button>
          <button className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold hover:bg-amber-200">Coffee</button>
          <button className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold hover:bg-amber-200">Pastries</button>
          <button className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold hover:bg-amber-200">Breakfast</button>
          <button className="bg-amber-100 text-amber-800 px-6 py-2 rounded-full font-semibold hover:bg-amber-200">Lunch</button>
        </div>
        
        {menuItems.map((category, index) => (
          <div key={index} className="mb-16">
            <h3 className="text-3xl font-playfair font-semibold text-amber-800 mb-8 text-center">{category.category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-amber-50 rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-amber-900">{item.name}</h4>
                    <span className="text-amber-700 font-bold">{item.price}</span>
                  </div>
                  <p className="text-amber-700 mb-4">{item.description}</p>
                  <button className="text-amber-700 hover:text-amber-900 font-semibold text-sm inline-flex items-center">
                    Add to order
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-8">
          <button className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Download Full Menu (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;