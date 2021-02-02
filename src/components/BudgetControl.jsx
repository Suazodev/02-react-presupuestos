import { checkBudget } from '../helpers';
import PropTypes from 'prop-types';

const BudgetControl = ({ budget, remaining }) => {
  return (
    <>
      <div className="alert alert-primary">Presupuesto: {budget}€</div>
      <div className={checkBudget(budget, remaining)}>Restante: {remaining}€</div>
    </>
  );
};

BudgetControl.propTypes = {
  budget: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default BudgetControl;
