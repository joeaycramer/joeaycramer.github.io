import React from 'react';

const SUPPLIERS = [
  "Alibaba", "Amazon", "CarBolts", "DavanTech", "eBay", "Geomiq", "Komacut", "Kunlong",
  "Made-in-China", "Orbital Fastners", "PixArtPrinting", "Plate Materials",
  "Westfield Fastners", "Westpack"
];

const CardForm = ({ card, index, onChange, onRemove }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, { ...card, [name]: value });
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow space-y-2">
      <h3 className="font-semibold text-lg">Card {index + 1}</h3>
      <input name="itemName" value={card.itemName} onChange={handleChange} placeholder="Item Name" className="input" />
      <input name="sku" value={card.sku} onChange={handleChange} placeholder="SKU" className="input" />
      <select name="supplier" value={card.supplier} onChange={handleChange} className="input">
        <option value="">Select Supplier</option>
        {SUPPLIERS.map((supplier) => (
          <option key={supplier} value={supplier}>{supplier}</option>
        ))}
      </select>
      <input name="minimum" value={card.minimum} onChange={handleChange} placeholder="Minimum Qty" className="input" />
      <input name="orderQuantity" value={card.orderQuantity} onChange={handleChange} placeholder="Order Quantity" className="input" />
      <input name="productUrl" value={card.productUrl} onChange={handleChange} placeholder="Product URL" className="input" />
      <input name="imageUrl" value={card.imageUrl} onChange={handleChange} placeholder="Image URL (optional)" className="input" />
      <textarea name="notes" value={card.notes} onChange={handleChange} placeholder="Notes" className="input" />
      <button onClick={() => onRemove(index)} className="text-red-500 mt-1 underline">Remove</button>
    </div>
  );
};

export default CardForm;
