import React, { useState } from 'react';

function ManualEntryForm({ onAddEntry }) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from && to && amount) {
      onAddEntry({ from, to, amount: Number(amount) });
      setFrom('');
      setTo('');
      setAmount('');
    }
  };

  return (
    <div style={{ width: '400px', margin: '30px auto' }}>
      <h3>🔁 Manual Fund Flow Entry</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From (e.g., Mirpur)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          placeholder="To (e.g., Uttara)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <br />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <br />
        <button type="submit">➕ Add Entry</button>
      </form>
    </div>
  );
}

export default ManualEntryForm;
