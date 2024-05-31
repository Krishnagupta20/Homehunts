import React, { useState } from 'react';

function ProductToggle() {

    return (
      <div className="p-2">
        <div className="flex items-center justify-centre bg-gray-200 p-2 rounded-lg">
          <button
            className={`px-2 py-2 mx-12 text-center w-1/4 bg-white rounded-lg`} 
          >
            Products
          </button>
        </div>
        <div className="mt-4 text-gray-500 text-left">
         <p>1719 Products</p>
        </div>
      </div>
    );
};

export default ProductToggle
