import React, { useState } from 'react';

const PolynomialFunction = () => {
  const [coefficients, setCoefficients] = useState('');
  const [exponents, setExponents] = useState('');
  const [xValue, setXValue] = useState('');
  const [results, setResults] = useState([]);

  const polynomialFunction = (coefficients, exponents, xValue) => {
    coefficients = coefficients.split(' ').map(Number);
    exponents = exponents.split(' ').map(Number);

    let result1 = 0;
    let result2 = 0;

    for (let i = 0; i < coefficients.length; i++) {
      result1 += coefficients[i] * Math.pow(xValue, exponents[i]);
      result2 += coefficients[i] * Math.pow(xValue, exponents[i] + 1);
    }

    return [result1.toFixed(2), result2.toFixed(2)];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const results = polynomialFunction(coefficients, exponents, parseFloat(xValue));
    setResults(results);
  };

  return (
    <div className="card">
      <h2>Polynomial Function</h2>
      <form onSubmit={handleSubmit}>
        <label>Coefficients (space-separated):</label>
        <input 
          type="text" 
          value={coefficients} 
          onChange={(e) => setCoefficients(e.target.value)} 
        />
        <label>Exponents (space-separated):</label>
        <input 
          type="text" 
          value={exponents} 
          onChange={(e) => setExponents(e.target.value)} 
        />
        <label>X Value:</label>
        <input 
          type="number" 
          value={xValue} 
          onChange={(e) => setXValue(e.target.value)} 
        />
        <button type="submit">Evaluate</button>
      </form>

      {results.length > 0 && (
        <p>
          Result 1: {results[0]}, Result 2: {results[1]}
        </p>
      )}
    </div>
  );
};

export default PolynomialFunction;
