import { useState } from 'react';

const useProductSearch = (initialProducts) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = initialProducts.filter(product =>
    product.title.toLowerCase().includes(searchQuery)
  );

  return { searchQuery, handleSearch, filteredProducts };
};

export default useProductSearch;
