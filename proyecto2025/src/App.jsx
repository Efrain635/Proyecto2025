import React, { useState } from 'react';

const App = () => {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (product && price) {
      setProducts([...products, { name: product, price: parseFloat(price) }]);
      setProduct('');
      setPrice('');
    }
  };

  const removeProduct = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const total = products.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={styles.container}>
      <h2>Lista de Compras</h2>
      
      <input 
        style={styles.input} 
        value={product} 
        onChange={(e) => setProduct(e.target.value)} 
        placeholder="Nombre del producto" 
      />
      <input 
        style={styles.input} 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        placeholder="Precio" 
        type="number" 
      />
      <button onClick={addProduct}>Agregar Producto</button>
      
      <ul>
        {products.map((item, index) => (
          <li key={index} style={styles.listItem}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeProduct(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
      
      <h3>Total a Pagar: ${total.toFixed(2)}</h3>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    width: '400px',
    margin: 'auto',
    marginTop: '50px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
};

export default App;
