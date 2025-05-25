import React, { useState, useEffect, useRef } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import { generateZipFromCards } from './utils/pdfUtils';

const defaultCard = {
  itemName: '',
  notes: '',
  sku: '',
  supplier: '',
  minimum: '',
  orderQuantity: '',
  productUrl: '',
  imageUrl: ''
};

const App = () => {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('cards');
    return saved ? JSON.parse(saved) : [defaultCard];
  });

  const previewRefs = useRef([]);

  useEffect(() => {
    localStorage.setItem('cards', JSON.stringify(cards));
  }, [cards]);

  const updateCard = (index, newCard) => {
    const updated = [...cards];
    updated[index] = newCard;
    setCards(updated);
  };

  const addCard = () => setCards([...cards, { ...defaultCard }]);

  const removeCard = (index) => setCards(cards.filter((_, i) => i !== index));

  const generatePDFs = async () => {
    await generateZipFromCards(previewRefs.current, cards);
  };

  return (
    <div className="p-4 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">🗂️ Inventory Card Generator</h1>

      <div className="grid md:grid-cols-2 gap-6 bg-white p-4 rounded-xl shadow">
        <div className="space-y-6">
          {cards.map((card, index) => (
            <CardForm
              key={index}
              card={card}
              index={index}
              onChange={updateCard}
              onRemove={removeCard}
            />
          ))}
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={addCard}
          >
            ➕ Add Another Card
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            onClick={generatePDFs}
          >
            📦 Download ZIP of Cards
          </button>
        </div>

        <div className="overflow-y-auto max-h-[80vh] space-y-6 p-2 bg-gray-50 rounded">
          {cards.map((card, index) => (
            <CardPreview
              key={index}
              card={card}
              index={index}
              refCallback={(el) => (previewRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
