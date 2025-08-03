import { useState } from 'react';

function CurrencyConvertor() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const result = parseFloat(rupees) / 90;
    setEuro(result.toFixed(2));
  };

  return (
    <div>
      <h2>Currency Converter (INR to EURO)</h2>
      <input
        type="number"
        placeholder="Enter INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
