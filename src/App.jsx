import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <>
      {fullName !== '' && <BalanceDisplay />}

      <div className='app-container'>
        <h1 className='app-title'>
          <span className='app-emoji'>🏦</span>
          The React-Redux Bank
          <span className='app-emoji'>⚛️</span>
        </h1>

        {fullName === '' ? (
          <div className='fade-in'>
            <CreateCustomer />
          </div>
        ) : (
          <div className='fade-in'>
            <Customer />
            <AccountOperations />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
