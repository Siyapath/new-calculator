import React, { useState } from 'react';

const HeronsFormula = () => {
  const [sideA, setSideA] = useState('');
  const [sideB, setSideB] = useState('');
  const [sideC, setSideC] = useState('');
  const [area, setArea] = useState('');

  const heronsFormula = (a, b, c) => {
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return area;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const a = parseFloat(sideA);
    const b = parseFloat(sideB);
    const c = parseFloat(sideC);
    const calculatedArea = heronsFormula(a, b, c);
    setArea(calculatedArea.toFixed(2));
  };

  return (
    <div className="card">
      <h2>Heron's Formula</h2>
      <form onSubmit={handleSubmit}>
        <label>Side A:</label>
        <input type="number" value={sideA} onChange={(e) => setSideA(e.target.value)} />
        <label>Side B:</label>
        <input type="number" value={sideB} onChange={(e) => setSideB(e.target.value)} />
        <label>Side C:</label>
        <input type="number" value={sideC} onChange={(e) => setSideC(e.target.value)} />
        <button type="submit">Calculate</button>
      </form>
      {area && <p>Area: {area} square units</p>}
    </div>
  );
};

export default HeronsFormula;
