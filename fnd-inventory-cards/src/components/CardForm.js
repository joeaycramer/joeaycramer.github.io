import React from 'react';

const CardForm = ({ card, index, onChange, onRemove }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, { ...card, [name]: value });
  };

  return (
    <div className="card-form">
      <h3>Card {index + 1}</h3>
      <input name="itemName" value={card.itemName} onChange={handleChange} placeholder="Item Name" required />
      <input name="sku" value={card.sku} onChange={handleChange} placeholder="SKU" />
      <input name="supplier" value={card.supplier} onChange={handleChange} placeholder="Supplier" />
      <input name="minimum" value={card.minimum} onChange={handleChange} placeholder="Minimum Qty" />
      <input name="orderQuantity" value={card.orderQuantity} onChange={handleChange} placeholder="Order Quantity" />
      <input name="productUrl" value={card.productUrl} onChange={handleChange} placeholder="Product URL" />
      <input name="imageUrl" value={card.imageUrl} onChange={handleChange} placeholder="Image URL (optional)" />
      <textarea name="notes" value={card.notes} onChange={handleChange} placeholder="Notes" />
      <button onClick={() => onRemove(index)}>Remove</button>
    </div>
  );
};

export default CardForm;
