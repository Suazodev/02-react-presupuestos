import { useState } from 'react';
import { Error } from './error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Form = ({ setExpense, setCreateExpense }) => {
  const [expenseName, setExpenseName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState(false);
  const addExpense = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity) || expenseName.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    const expense = {
      expenseName,
      quantity,
      id: shortid.generate(),
    };
    setExpense(expense);
    setCreateExpense(true);
    setExpenseName('');
    setQuantity(0);
  };
  return (
    <form onSubmit={addExpense}>
      <h2>Agrega tus gastos</h2>
      {error ? <Error message={'Ambos campos son obligatorios o presupuesto incorrecto'} /> : null}
      <div className="campo">
        <label>Nombre gasto</label>
        <input type="text" className="u-full-width" placeholder="Ej. Transporte" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} />
      </div>
      <div className="campo">
        <label>Cantidad gasto</label>
        <input type="number" className="u-full-width" placeholder="Ej. 300" value={quantity} onChange={(e) => setQuantity(+e.target.value)} />
      </div>
      <input type="submit" className="button-primary u-full-wodth" value="agregar gasto" />
    </form>
  );
};

Form.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setCreateExpense: PropTypes.func.isRequired,
};

export default Form;
