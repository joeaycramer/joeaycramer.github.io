import React from 'react';
import QRCode from 'qrcode.react';

const CardPreview = ({ card, index, refCallback }) => {
  const {
    itemName,
    sku,
    supplier,
    minimum,
    orderQuantity,
    productUrl,
    imageUrl,
    notes,
  } = card;

  return (
    <div
      className="card-preview"
      style={{
        width: '105mm',
        height: '148mm',
        padding: '10mm',
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        marginBottom: '10px',
        background: 'white',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
      ref={refCallback}
    >
      <h2 style={{ fontSize: '20px', margin: '0 0 10px' }}>{itemName}</h2>

      {productUrl && (
        <div style={{ marginBottom: '10px' }}>
          <QRCode value={productUrl} size={100} />
        </div>
      )}

      <ul style={{ listStyle: 'none', padding: 0, fontSize: '14px' }}>
        {minimum && <li><strong>Minimum:</strong> {minimum}</li>}
        {orderQuantity && <li><strong>Order Qty:</strong> {orderQuantity}</li>}
        {supplier && <li><strong>Supplier:</strong> {supplier}</li>}
        {sku && <li><strong>SKU:</strong> {sku}</li>}
        {notes && <li><strong>Notes:</strong> {notes}</li>}
      </ul>

      {imageUrl && (
        <div style={{ position: 'absolute', bottom: '10mm', right: '10mm' }}>
          <img src={imageUrl} alt="" style={{ width: '50mm', maxHeight: '50mm', objectFit: 'contain' }} />
        </div>
      )}
    </div>
  );
};

export default CardPreview;
