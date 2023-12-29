import React, { useState } from 'react';
import './SignUp.css';
import { FiFacebook, FiGift, FiGithub } from 'react-icons/fi';

const getPasswordStrength = (password) => {
  if (password.length >= 8 && /\d/.test(password) && /[a-zA-Z]/.test(password)) {
    return 'Strong';
  } else if (password.length >= 6) {
    return 'Medium';
  } else {
    return 'Weak';
  }
};

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirm_password: '',
  });

  const [error, setError] = useState('');
  const [passwordStrength, setPasswordStrength] = useState('');

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: newPassword,
    });

    const strength = getPasswordStrength(newPassword);
    setPasswordStrength(strength);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirm_password) {
      setError('All fields are required');
      return;
    }

    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      return;
    }

    setError('');
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirm_password"
            placeholder="Confirm Password"
            value={formData.confirm_password}
            onChange={handleChange}
          />
          {passwordStrength && <p className={`password-strength ${passwordStrength.toLowerCase()}`}>{`Password Strength: ${passwordStrength}`}</p>}
          <button type="submit">Login</button>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="social-signup">
          <p>Login with:</p>
          <div className="social-icons">
            <a href="#facebook">
              <FiFacebook />
            </a>
            <a href="#Google">
              <FiGift />
            </a>
            <a href="#Github">
              <FiGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
