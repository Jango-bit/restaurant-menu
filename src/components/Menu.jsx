import React from 'react';

const Menu = () => {
  const menuItems = [
    {
      category: "Coffee",
      items: [
        { 
          name: "Espresso", 
          description: "Strong and bold, our signature espresso", 
          price: "$3.50",
          image: "https://tse4.mm.bing.net/th/id/OIP.cLgUxNF8eljza6H1GqNYlQHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        { 
          name: "Cappuccino", 
          description: "Perfect balance of espresso, steamed milk, and foam", 
          price: "$4.25",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
        },
        { 
          name: "Latte", 
          description: "Smooth espresso with steamed milk", 
          price: "$4.50",
          image: "https://th.bing.com/th/id/OIP.6Lb2xzBM3B6maFHPDwhw5AHaE8?w=261&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        },
        { 
          name: "Cold Brew", 
          description: "Slow-steeped for 18 hours for a smooth flavor", 
          price: "$4.75",
          image: "https://tse1.mm.bing.net/th/id/OIP.A40SLMLSJLBerqrtMFkXGwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
        },
        { 
          name: "Mocha", 
          description: "Espresso with chocolate and steamed milk", 
          price: "$4.95",
          image: "https://th.bing.com/th/id/OIP.LVNpE_D9SmpF6Pub41EQ0gHaE8?w=280&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        },
        { 
          name: "Americano", 
          description: "Espresso with hot water", 
          price: "$3.75",
          image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80"
        }
      ]
    },
    {
      category: "Pastries",
      items: [
        { 
          name: "Croissant", 
          description: "Buttery, flaky pastry", 
          price: "$3.25",
          image: "data:image/webp;base64,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"
        },
        { 
          name: "Danish Pastry", 
          description: "Sweet pastry with fruit filling", 
          price: "$3.75",
          image: "https://th.bing.com/th/id/OIP.tPkgAvgXjtG-R1fQNlm8ywHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
        },
        { 
          name: "Blueberry Muffin", 
          description: "Fresh blueberries in every bite", 
          price: "$3.50",
          image: "https://bing.com/th?id=OSK.c3c44778b4d09e08b1d7b6df36a0499b"
        },
        { 
          name: "Cinnamon Roll", 
          description: "Swirled with cinnamon and icing", 
          price: "$4.25",
          image: "https://sallysbakingaddiction.com/wp-content/uploads/2013/05/easy-cinnamon-rolls-recipe-1.jpg"
        },
        { 
          name: "Scone", 
          description: "Choice of blueberry, cranberry, or plain", 
          price: "$3.25",
          image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80"
        },
        { 
          name: "Banana Bread", 
          description: "Homemade with ripe bananas", 
          price: "$3.95",
          image: "https://bing.com/th?id=OSK.6bea7f2ee4e29c38ca3513160b4f58dc"
        }
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
                <div key={itemIndex} className="bg-amber-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  {/* Image Section */}
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
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