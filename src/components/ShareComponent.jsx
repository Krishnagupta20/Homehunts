import React from 'react';

const ShareComponent = ({ url, onClose }) => {
  const handleCopyLink = () => {
    navigator.clipboard.writeText(url)
      .then(() => alert('Link copied to clipboard!'))
      .catch((error) => console.error('Error copying link', error));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-xl mb-4">Share this product</h2>
        <button onClick={handleCopyLink} className="bg-blue-500 text-white px-4 py-2 rounded">
          Copy Link
        </button>
        <button onClick={() => window.open(url, '_blank')} className="bg-green-500 text-white px-4 py-2 rounded ml-2">
          Open Link
        </button>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded ml-2">
          Close
        </button>
      </div>
    </div>
  );
};

export default ShareComponent;
