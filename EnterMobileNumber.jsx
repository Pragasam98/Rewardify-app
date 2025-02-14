import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  LoginContainer,
  LoginCard,
  Logo,
  Heading,
  Description,
  MobileInput,
  ErrorMessage,
  OTPButton,
  Terms,
  Spinner,
  LoaderWrapper,
  TermsWrapper,
  ErrorContainer,
} from './EnterMobileNumberStyles';
import logo from './images/logo.png';

const EnterMobileNumber = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const API_URL = process.env.REACT_APP_API_BASE_URL || 'https://rewardify.dotcod.in/api';
  const GENERATE_OTP_LOGIN = '/v1/store-user/auth/generate-otp';

  // Validate mobile number (starts with 6-9 and is 10 digits long)
  const validateMobileNumber = (number) => /^[6-9]\d{9}$/.test(number);

  const handleSendOTP = async () => {
    if (!validateMobileNumber(mobileNumber)) {
      setError('Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}${GENERATE_OTP_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          dialCode: 91,
          contactNo: mobileNumber,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send OTP. Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.message) {
        navigate('/validate-otp', { state: { mobileNumber } });
      } else {
        setError(data.message || 'Failed to send OTP.');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Heading>Get Started with REWARDIFY</Heading>
        <Description>
          Enter your mobile number or Shop ID <br /> to get started
        </Description>
        <MobileInput
          type="text"
          placeholder="Enter Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          maxLength="10"
          aria-label="Mobile Number"
        />
        <ErrorContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </ErrorContainer>
        <OTPButton
          onClick={handleSendOTP}
          disabled={loading || !mobileNumber}
          aria-disabled={loading || !mobileNumber}
        >
          {loading ? (
            <LoaderWrapper>
              <Spinner />
            </LoaderWrapper>
          ) : (
            'Send OTP'
          )}
        </OTPButton>
        <TermsWrapper>
          <Terms>
            By clicking, you agree to our{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="/privacy" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            .
          </Terms>
        </TermsWrapper>
      </LoginCard>
    </LoginContainer>
  );
};

export default EnterMobileNumber;
