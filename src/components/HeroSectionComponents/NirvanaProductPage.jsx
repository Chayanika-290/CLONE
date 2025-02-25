import React from 'react';
import { useParams, Link } from 'react-router-dom';

const NirvanaProductPage = () => {
  const { id } = useParams();

  return (
    <div className="max-w-[1440px] mx-auto px-6 py-8">
      <h1 className="text-2xl font-bold mb-4">Product Detail Page</h1>
      <p>Product ID: {id}</p>
      <Link 
        to="/party-speakers"
        className="text-blue-500 hover:underline block mt-8"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default NirvanaProductPage;
