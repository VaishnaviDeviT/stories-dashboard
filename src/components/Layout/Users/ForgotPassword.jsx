import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const [oldPasswordError, setOldPasswordError] = useState('');
  const [newPasswordError, setNewPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const handleValidation = () => {
    let isValid = true;

    if (!oldPassword) {
      setOldPasswordError('The Current Password field is required.');
      isValid = false;
    } else {
      setOldPasswordError('');
    }

    if (!newPassword) {
      setNewPasswordError('The Password field is required.');
      isValid = false;
    } else {
      setNewPasswordError('');
    }

    if (!confirmPassword) {
      setConfirmPasswordError('The Confirm Password field is required.');
      isValid = false;
    } else if (newPassword !== confirmPassword) {
      setConfirmPasswordError('New password and confirm password do not match.');
      isValid = false;
    } else {
      setConfirmPasswordError('');
    }

    return isValid;
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (!handleValidation()) {
      return;
    }

    try {
      const response = await fetch('https://www.medicoverhospitals.in/apis/password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: '026588',    
          old_password: oldPassword,
          new_password: newPassword
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Password updated successfully!');
        setError(false);
        setOldPassword('');   
        setNewPassword('');
        setConfirmPassword('');
        navigate('/');
      } else {
        setMessage(data.message || 'Failed to update the password.');
        setError(true);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
      setError(true);
    }
    
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center align-items-center">
        <Col xs={12} md={5}>
          <div className="card card-body px-4 py-5">
            <h1 className="text-center mb-4">Change Password</h1>
            <Form onSubmit={handleChangePassword}>
              <Form.Group className="mb-4">
                <Form.Label>Old Password</Form.Label>
                <Form.Control
                  type="password"
                  value={oldPassword}
                  placeholder="Enter your current password"
                  onChange={(e) => setOldPassword(e.target.value)}
                />
                {oldPasswordError && (
                  <div className="text-danger">{oldPasswordError}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  value={newPassword}
                  placeholder="Enter new password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                {newPasswordError && (
                  <div className="text-danger">{newPasswordError}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  placeholder="Confirm new password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                {confirmPasswordError && (
                  <div className="text-danger">{confirmPasswordError}</div>
                )}
              </Form.Group>
              <Button className="mt-4 w-100" type="submit">Change</Button>
            </Form>
            {message && (
              <p className={`mt-3 ${error ? 'text-danger' : 'text-success'}`}>
                {message}
              </p>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
