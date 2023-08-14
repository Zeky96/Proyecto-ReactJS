import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fakeApiData = [
      {
        id: 1,
        name: 'Lemon Glow',
        description: 'Shampoo de limon enriquecido con jojoba, pantenol y vitamina E.',
        image: 'ruta-de-la-imagen-1.jpg', // Ruta de la imagen para el producto 1
      },
      {
        id: 2,
        name: 'Power Mint',
        description: 'Shampoo de menta con keratina y vitamina B5',
        image: 'powermint-min.jpg', // Ruta de la imagen para el producto 2
      },
     
    ];

    // Simulamos un retraso para mostrar la obtención de datos asíncronos
    setTimeout(() => {
      setProducts(fakeApiData);
    }, 1000);
  }, []);

  return (
    <div>
      <h2>Catálogo de Productos</h2>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Ver Detalles
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
