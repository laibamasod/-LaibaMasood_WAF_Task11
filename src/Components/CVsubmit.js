import React, { useState } from 'react';
import axios from 'axios';
import "./cvsubmit.css";
const CVsubmit = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        name,
        address,
        email,
        number
      };

      const response = await axios.post('http://localhost:8080/createUser', formData);
      alert('User data submitted:');
      window.location.reload();
      setName('');
      setAddress('');
      setEmail('');
      setNumber('');
    } catch (error) {
      console.error('Error submitting user data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-input"
      />
      <button type="submit" className="submit-button">Submit</button>
    </form>
  );
};

export default CVsubmit;
