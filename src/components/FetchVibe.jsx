import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayVibe from "./DisplayVibe";

const FetchVibe = () => {
  const [vibeData, setVibeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVibe = async () => {
      try {
        const response = await axios.post(
          "https://api.furrl.in/api/v2/listing/getVibeByName",
          {
            name: "#HomeHunts",
          }
        );
        setVibeData(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchVibe();
  }, []);

  console.log(vibeData);
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="">
      {vibeData && <DisplayVibe vibeData={vibeData.data} />}
    </div>
  );
};
export default FetchVibe;
