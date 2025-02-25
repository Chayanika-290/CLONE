import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const { id } = useParams();

  return (
    <div className="category-page">
      <h1>Category Page</h1>
      <p>Category ID: {id}</p>
      {/* Add your category page content here */}
    </div>
  );
};

export default CategoryPage; 