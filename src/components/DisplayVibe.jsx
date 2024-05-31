import React from "react";

const DisplayVibe = ({ vibeData }) => {
  return (
    <div className="relative w-full h-48 overflow-hidden">
      <img
        src={vibeData.getVibeByName.imageUrl}
        alt="Displayed"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
};

export default DisplayVibe;
