import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();

  const product = { id: productId, name: 'Producto Detalle' };

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>ID: {product.id}</p>
      <p>Nombre: {product.name}</p>
    </div>
  );
};

export default ProductDetail;
