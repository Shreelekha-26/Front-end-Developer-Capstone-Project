import React, { useState } from 'react';
import { submitAPI } from './submitAPI'; // ensure correct path

function BookingForm() {
  const [formData, setFormData] = useState({ name: '', date: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitAPI(formData)) {
      alert('✅ Booking Successful!');
    } else {
      alert('❌ Submission Failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          id="name" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
          placeholder="Enter your name"
          required 
        />
      </div>

      <div>
        <label htmlFor="date">Date:</label>
        <input 
          id="date" 
          name="date" 
          type="date" 
          value={formData.date}
          onChange={handleChange} 
          required 
        />
      </div>

      <button type="submit">Book</button>
    </form>
  );
}

export default BookingForm;
