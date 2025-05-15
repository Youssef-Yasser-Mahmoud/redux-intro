import { connect } from 'react-redux';
import './BalanceDisplay.css';

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className='balance'>{formatCurrency(balance)}</div>;
}

export default connect(mapStateToProps)(BalanceDisplay);

function mapStateToProps(store) {
  return {
    balance: store.account.balance,
  };
}
