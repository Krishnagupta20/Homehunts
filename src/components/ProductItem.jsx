import React, { useState } from "react";
import { Share } from "react-feather";
import ShareComponent from "./ShareComponent"; // Ensure this is the correct path

const ProductItem = ({ product }) => {
  const [showShare, setShowShare] = useState(false);
  const imageUrl = product.images?.[0]?.src;
  const isLongName = product.title.length > 20;
  const brandName = product.brand?.[0].name;
  const productDetailUrl = `https://furrl.in/productDetail?id=${product.id}&ref=vibeResults_HomeHunts`;

  const redirectToProductDetail = () => {
    window.location.href = productDetailUrl;
  };

  const handleShareClick = (event) => {
    event.stopPropagation();
    if (navigator.share) {
      navigator
        .share({
          title: "Product Detail",
          text: "Check out this product!",
          url: productDetailUrl,
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      setShowShare(true);
    }
  };

  const handleCloseShare = () => {
    setShowShare(false);
  };

  return (
    <>
      <div
        onClick={redirectToProductDetail}
        style={{ cursor: "pointer" }}
        className="max-w-xs rounded overflow-hidden shadow-lg mx-auto relative mb-4 md:mb-0"
      >
        <div className="relative">
          <img
            className="w-screen object-cover h-48"
            src={imageUrl}
            alt={product.title}
          />
          <button
            onClick={handleShareClick}
            className="absolute bottom-2 right-2 w-6 h-6 bg-gray-700 rounded-full shadow-lg focus:outline-none justify-center items-center flex"
          >
            <Share className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="px-4 py-2">
          <div className="flex justify-start items-center gap-1">
            <div
              className={`text-xs sm:text-xl justify-start font-extralight ${
                isLongName ? "text-xs" : ""
              } truncate`}
            >
              {brandName}
            </div>
          </div>
          <div className="flex justify-start items-center gap-1">
            <div
              className={`text-xs sm:text-xl justify-start font-light ${
                isLongName ? "text-xs" : ""
              } truncate`}
            >
              {product.title}
            </div>
          </div>
          <div className="flex justify-start items-center gap-1">
            <span className="text-black text-xs font-semibold">Rs.{product.price.value}</span>
            <span className="text-gray-500 text-xs line-through">
              Rs.{product.MRP.value}
            </span>
            <span className="text-blue-500 text-xs">
              {product.discountPercent}%
            </span>
          </div>
        </div>
      </div>
      {showShare && <ShareComponent url={productDetailUrl} onClose={handleCloseShare} />}
    </>
  );
};

export default ProductItem;
