import React, { useState } from 'react';
import './PaymentForm.css';
const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [paymentError, setPaymentError] = useState(null);

  const handlePayment = async () => {
    try {
      // Send payment and user details to your server for processing
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          expiryDate,
          cvc,
          name,
          email,
          address,
        }),
      });

      if (response.ok) {
        // Handle successful payment on the client side
        console.log('Payment successful!');
      } else {
        const errorData = await response.json();
        setPaymentError(errorData.message || 'Payment failed');
      }
    } catch (error) {
      setPaymentError('An error occurred while processing the payment');
    }
  };

  return (
    <div className="payment-form">
     
      <label>
        Card Number:
        <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
      </label>
      <label>
        Expiry Date:
        <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
      </label>
      <label>
        CVC:
        <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
      </label>

      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Address:
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>

      {paymentError && <div style={{ color: 'red' }}>{paymentError}</div>}
      <button onClick={handlePayment}>Submit Payment</button>
    </div>
  );
};

export default PaymentForm;
