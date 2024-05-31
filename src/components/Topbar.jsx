import React from "react";
function Topbar() {
  const handleRedirect1 = () => {
    window.location.href = "https://furrl.in/wishlist";
  };
  const handleRedirect2 = () => {
    window.location.href = "https://furrl.in/cart";
  };
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex-1"></div>
      <span className="text-3xl font-normal text-purple-600">Furrl</span>
      <div className="flex items-center space-x-4 flex-1 justify-end">
        <button
          onClick={handleRedirect1}
          className="text-gray-700 focus:outline-none"
        >
         <img src="https://furrl.in/_next/static/media/Whislist.2ac94d87.svg" alt="wishlist"/>
        </button>
        <button
          onClick={handleRedirect2}
          className="text-gray-700 focus:outline-none"
        >  
          <img src="https://furrl.in/_next/static/media/Bag.b94fa005.svg" alt="cart"/>
        </button>
      </div>
    </nav>
  );
}

export default Topbar;
