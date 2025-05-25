import React, { useState, useEffect, useRef } from 'react';
import CardForm from './components/CardForm';
import CardPreview from './components/CardPreview';
import { generateZipFromCards } from './utils/pdfUtils';

const App = () => {
  const [cards, setCards] = useState(() => {
    const saved = localStorage.getItem('cards');
    return saved ? JSON.parse(saved) : [{
      itemName: '',
      notes: '',
      sku: '',
      supplier: '',
      minimum: '',
      orderQuantity: '',
      productUrl: '',
      imageUrl: ''
    }];
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

  const addCard = () => {
    setCards([...cards, {
      itemName: '',
      notes: '',
      sku: '',
      supplier: '',
      minimum: '',
      orderQuantity: '',
      productUrl: '',
      imageUrl: ''
    }]);
  };

  const removeCard = (index) => {
    const updated = cards.filter((_, i) => i !== index);
    setCards(updated);
  };

  const generatePDFs = async () => {
    await generateZipFromCards(previewRefs.current, cards);
  };

  return (
    <div>
      <h1>Inventory Card Generator</h1>
      {cards.map((card, index) => (
        <div key={index}>
          <CardForm card={card} index={index} onChange={updateCard} onRemove={removeCard} />
          <CardPreview card={card} index={index} refCallback={(el) => previewRefs.current[index] = el} />
        </div>
      ))}
      <button onClick={addCard}>Add Another Card</button>
      <button onClick={generatePDFs}>Generate PDF ZIP</button>
    </div>
  );
};

export default App;
