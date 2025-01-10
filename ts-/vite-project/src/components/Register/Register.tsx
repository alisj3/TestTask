import React, { useState } from 'react';
import axios from 'axios';

// UserInfo component to display user info after successful registration
const UserInfo: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div style={styles.container}>
      <h2>User Information</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>First Name:</strong> {user.firstName}</p>
      <p><strong>Last Name:</strong> {user.lastName}</p>
    </div>
  );
};

// Define the type for form data
interface FormData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState<string | null>(null);
  const [isRegistered, setIsRegistered] = useState(false);
  const [userInfo, setUserInfo] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('https://localhost:7087/api/register/register', {
        email: formData.email,
        phone: formData.phone,
        firstName: formData.firstName,
        lastName: formData.lastName,
        password: formData.password,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setMessage(response.data.message);
      setUserInfo({
        email: formData.email,
        phone: formData.phone,
        firstName: formData.firstName,
        lastName: formData.lastName,
      });

      setIsRegistered(true);
    } catch (error: any) {
      const errorMessage = error.response?.data || 'An error occurred. Please try again.';
      setMessage(errorMessage);
    }
  };

  // If the user is registered, show the user info
  if (isRegistered) {
    return <UserInfo user={userInfo} />;
  }

  return (
    <div style={styles.container}>
      <h2>Register</h2>
      {message && <p style={message.includes('successful') ? styles.successMessage : styles.errorMessage}>{message}</p>}
      <form onSubmit={handleSubmit}>
        {['email', 'phone', 'firstName', 'lastName'].map((field) => (
          <div key={field} style={styles.formField}>
            <label>{capitalizeFirstLetter(field)}</label>
            <input
              type={field === 'email' ? 'email' : 'text'}
              name={field}
              value={formData[field as keyof FormData]} // TypeScript will know this is a valid key
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>
        ))}
        <div style={styles.formField}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formField}>
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Register</button>
      </form>
    </div>
  );
};

// Capitalize first letter of field name for label
const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// Reusable styles
const styles = {
  container: {
    maxWidth: '400px',
    margin: '100px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  formField: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
  },
  successMessage: {
    color: 'green',
  },
  errorMessage: {
    color: 'red',
  },
};

export default Register;
