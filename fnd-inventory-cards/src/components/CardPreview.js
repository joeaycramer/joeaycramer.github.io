import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const CardPreview = ({ card, index, refCallback }) => {
  const { itemName, sku, supplier, minimum, orderQuantity, productUrl, imageUrl, notes } = card;

  return (
    <div
      className="bg-white border border-gray-300 shadow rounded p-4 w-[105mm] h-[148mm] relative"
      ref={refCallback}
    >
      <h2 className="text-xl font-bold mb-2">{itemName}</h2>

      {productUrl && (
        <div className="mb-2">
          <QRCodeSVG value={productUrl} size={100} />
        </div>
      )}

      <ul className="text-sm space-y-1">
        {minimum && <li><strong>Minimum:</strong> {minimum}</li>}
        {orderQuantity && <li><strong>Order Qty:</strong> {orderQuantity}</li>}
        {supplier && <li><strong>Supplier:</strong> {supplier}</li>}
        {sku && <li><strong>SKU:</strong> {sku}</li>}
        {notes && <li><strong>Notes:</strong> {notes}</li>}
      </ul>

      {imageUrl && (
        <div className="absolute bottom-4 right-4">
          <img src={imageUrl} alt="" className="max-w-[50mm] max-h-[50mm] object-contain" />
        </div>
      )}
    </div>
  );
};

export default CardPreview;
