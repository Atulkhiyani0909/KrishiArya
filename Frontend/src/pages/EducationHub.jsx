import React from 'react';

let articles = [
  { title: "Introduction to Organic Farming", content: "Learn the basics of organic farming, its importance, and how it benefits the environment and human health." },
  { title: "Sustainable Agriculture Practices", content: "Discover sustainable farming methods that enhance productivity while preserving nature." },
  { title: "Organic Pest Control Methods", content: "Explore natural ways to manage pests without harming crops or the environment." }
];

let benefits = [
  "Reduces pollution and conserves water",
  "Improves soil health and biodiversity",
  "Produces healthier food and promotes sustainability"
];

let farmingSteps = [
  "Choose organic seeds and crops",
  "Enhance soil health naturally",
  "Use compost and natural fertilizers",
  "Avoid synthetic pesticides and chemicals",
  "Practice crop rotation and sustainable techniques"
];

let organicProducts = [
  { name: "Organic Vegetables", description: "Fresh, chemical-free vegetables grown naturally." },
  { name: "Organic Fruits", description: "Nutritious, pesticide-free organic fruits." },
  { name: "Organic Dairy", description: "Milk, cheese, and butter from grass-fed animals." },
  { name: "Organic Grains", description: "Whole grains cultivated without harmful chemicals." }
];

function EducationHub() {
  return (
    <div className="m-16 bg-white min-h-screen p-8">``
      <header className="text-center text-[#16A34A] text-4xl font-bold mb-8">
        Organic Farming Education Portal
      </header>
      
      <section className="mb-8">
        <h2 className="text-3xl text-[#16A34A] font-bold mb-6">Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <div key={index} className="border border-[#16A34A] p-4 rounded-2xl shadow-md">
              <h3 className="text-2xl text-[#16A34A] font-semibold">{article.title}</h3>
              <p className="text-gray-700 mt-2">{article.content}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#16A34A] text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Benefits of Organic Farming</h2>
          <ul className="list-disc pl-6">
            {benefits.map((benefit, index) => (
              <li key={index} className="text-lg mb-2">{benefit}</li>
            ))}
          </ul>
        </div>
        
        <div className="bg-[#16A34A] text-white p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Steps for Farmers</h2>
          <ul className="list-decimal pl-6">
            {farmingSteps.map((step, index) => (
              <li key={index} className="text-lg mb-2">{step}</li>
            ))}
          </ul>
        </div>
      </section>
      
      <section className="mb-8">
        <h2 className="text-3xl text-[#16A34A] font-bold mb-6">Organic Farming Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organicProducts.map((product, index) => (
            <div key={index} className="border border-[#16A34A] p-4 rounded-2xl shadow-md">
              <h3 className="text-2xl text-[#16A34A] font-semibold">{product.name}</h3>
              <p className="text-gray-700 mt-2">{product.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <footer className="text-center text-gray-600 mt-12">
        © 2025 Education Hub - Empowering Sustainable Farming
      </footer>
    </div>
  );
}

export default EducationHub;