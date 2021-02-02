import { useState } from 'react';
import { Error } from './error';
import PropTypes from 'prop-types';

const Question = ({ setBudget, setRemaining, setShowQuestion }) => {
  const [quantity, setquantity] = useState(0);
  const [error, setError] = useState(false);
  const defineBudget = (e) => setquantity(+e.target.value);
  const addBudget = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity)) {
      setError(true);
      return;
    }
    setError(false);
    setBudget(quantity);
    setRemaining(quantity);
    setShowQuestion(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message={'El presupuesto es incorrecto'} /> : null}
      <form onSubmit={addBudget}>
        <input type="number" className="u-full-width" placeholder="Coloca tu presupuesto" onChange={defineBudget} />
        <input type="submit" className="button-primary u-full-width" value="Definir presupuesto" />
      </form>
    </>
  );
};

Question.propTypes = {
  setBudget: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setShowQuestion: PropTypes.func.isRequired,
};

export default Question;
