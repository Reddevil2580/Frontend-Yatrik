import React from 'react';
import { useNavigate } from 'react-router-dom';
import KhaltiCheckout from 'khalti-checkout-web';
import config from './KhaltiConfig';
import './Khalti.css';
import khaltiimg from './khaltiimg.png';

export default function Khalti() {
  const history = useNavigate();
  let checkout = new KhaltiCheckout(config);

  const handlePayment = () => {
    checkout.show({ amount: 100000 });
  };

  checkout.success = (payload) => {
    // Payment was successful
    // Redirect to the homepage
    history.push('/');
  };

  return (
    <div className="khalti-container">
      <div className="khalti-image">
        <img src={khaltiimg} alt="/khalti1" />
      </div>
      <div className="khalti-content">
        <h4 className="khalti-title">Growing and smiling Together With Khalti</h4>
        <h4 className="khalti-subtitle">Our National Transaction Partner</h4>
        <button onClick={handlePayment} className="khalti-button">
          Pay Via Khalti
        </button>
      </div>
    </div>
  );
}
