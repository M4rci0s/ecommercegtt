import React, { useState, useEffect } from 'react';
import api from '../service/index';

const ProductList = ({ onEdit, onDelete }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await api.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.description} - {product.price} - {product.quantity}
            <button onClick={() => onEdit(product)}>Editar</button>
            <button onClick={() => onDelete(product.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
