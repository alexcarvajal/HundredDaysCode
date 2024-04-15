import { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');

  const handleSum = () => {
    const operandoA = document.getElementById('operandoA');
    const operandoB = document.getElementById('operandoB');
    const resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if (isNaN(resultado)) {
      setResult('No se puede sumar');
    } else {
      setResult(`El resultado de la suma es: ${resultado}`);
    }
  };

  return (
    <div className="container">
      <h1>Calculadora</h1>
      <form id="forma">
        <div className="mb-3">
          <label htmlFor="operandoA"> Operando A</label>
          <input type="number" className="form-control" placeholder="Escribe operando A" id="operandoA" />
        </div>
        <div className="mb-3">
          <label htmlFor="operandoB"> Operando B</label>
          <input type="number" className="form-control" placeholder="Escribe operando B" id="operandoB" />
        </div>
      </form>
      <button className="btn btn-primary mb-3" onClick={handleSum}>
        Sumar
      </button>
      <div id="resultado">{result}</div>
    </div>
  );
}

export default Calculator;