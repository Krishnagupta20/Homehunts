import React, { useState } from 'react';

const categories = ['All', 'Apparel', 'Accessories', 'Home', 'Kurtas And Kurtis'];

const HorizontalScrollBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-full overflow-x-auto whitespace-nowrap py-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryClick(category)}
          className={`inline-block mx-2 px-4 py-2 rounded-full ${
            category === selectedCategory ? 'bg-purple-500 text-white' : 'bg-gray-200 text-black'
          }`}
        >
          {category}
        </button>
      ))}
      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default HorizontalScrollBar;
