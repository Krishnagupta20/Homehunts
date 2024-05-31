import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "./ProductItem.jsx";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await axios.post(
        "https://api.furrl.in/api/v2/listing/getListingProducts",
        {
          input: {
            entity: "vibe",
            id: "#HomeHunts",
            page: page,
            pageSize: 10,
          },
        }
      );
      console.log(response.data.data.getListingProducts.products);
      const newProducts = response.data.data.getListingProducts.products;

      setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      if (newProducts.length === 0) setHasMore(false);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={() => setPage((prevPage) => prevPage + 1)}
      hasMore={hasMore}
      endMessage={<p>No more products</p>}
    >
      <div className="flex flex-wrap -mx-2">
        {products.map((product, index) => {
          const position = index % 5; 
          const isFullRow = position === 2;
          return (
            <div
              key={product.id}
              className={`px-2 ${isFullRow ? "w-full" : "w-1/2"}`}
            >
              <ProductItem product={product} />
            </div>
          );
        })}
      </div>
    </InfiniteScroll>
  );
};

export default ProductList;
