import { useSelector } from 'react-redux';
import './Customer.css';

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);

  return (
    <h2 className='customer-welcome'>
      <span>👋</span> Welcome, {customer}
    </h2>
  );
}

export default Customer;
