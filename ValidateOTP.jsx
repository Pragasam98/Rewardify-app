import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  OTPContainer,
  OTPCard,
  Logo,
  Heading,
  Description,
  OTPInputs,
  OTPInput,
  MessagesContainer,
  ErrorMessage,
  SuccessMessage,
  ValidateButton,
  Timer,
  ResendButton,
} from './ValidateOTPStyles';
import logo from './images/logo.png';

const ValidateOTP = () => {
  const { state } = useLocation(); // Access navigation state for mobile number
  const navigate = useNavigate();

  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [timer, setTimer] = useState(90);
  const [canResend, setCanResend] = useState(false);

  const API_URL = process.env.REACT_APP_API_BASE_URL || 'https://rewardify.dotcod.in/api';

  const handleOTPChange = (e, index) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Allow only numeric input
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');
  };

  const handleFocus = (e, index) => {
    if (e.key === 'Backspace' && otp[index] === '') {
      const prevIndex = index - 1;
      if (prevIndex >= 0) {
        document.getElementById(`otp-${prevIndex}`).focus();
      }
    } else if (e.key !== 'Backspace') {
      const nextIndex = index + 1;
      if (nextIndex < otp.length) {
        document.getElementById(`otp-${nextIndex}`).focus();
      }
    }
  };

  const handleVerifyOTP = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 4 || isNaN(otpValue)) {
      setError('Please enter a valid 4-digit OTP.');
      return;
    }

    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/v1/store-user/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          device: JSON.stringify({
            device: 'SM-A105F',
            app: 'mobile',
            appType: 'android',
            device_type: 2,
            os: 'android',
            osVersion: '9',
            browser: 'null',
            browserVersion: 'null',
          }),
        },
        body: JSON.stringify({
          dialCode: 91, // Ensure this is sent as a number
          contactNo: state?.mobileNumber || '',
          type: 1,
          otp: otpValue,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'OTP verification failed. Please try again.');
      }

      const data = await response.json();

      console.log('Token received:', data.token);  // Debugging the token
      console.log('Refresh Token received:', data.refreshToken);  // Debugging the refresh token

      if (data.token) {
        setSuccess(true);

        // Save tokens in localStorage
        localStorage.setItem('authToken', data.token); // Auth token
        localStorage.setItem('refreshToken', data.refreshToken); // Refresh token

        navigate('/dashboard'); // Navigate to the dashboard page
      } else {
        setError('OTP verification failed. Please check the OTP and try again.');
      }
    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const handleResendOTP = () => {
    setCanResend(false);
    setTimer(90); // Reset the timer to 1 minute 30 seconds
    // Call API to resend OTP here
  };

  const isOTPComplete = otp.every((digit) => digit !== ''); // Check if OTP is completely filled

  return (
    <OTPContainer>
      <OTPCard>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <Heading>Verify your details</Heading>
        <Description>Enter OTP number below</Description>

        <OTPInputs>
          {otp.map((digit, index) => (
            <OTPInput
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleOTPChange(e, index)}
              onKeyUp={(e) => handleFocus(e, index)}
              maxLength="1"
            />
          ))}
        </OTPInputs>

        <MessagesContainer>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {success && <SuccessMessage>OTP verified successfully!</SuccessMessage>}
        </MessagesContainer>

        <ValidateButton
          onClick={handleVerifyOTP}
          disabled={loading || !isOTPComplete}
        >
          {loading ? 'Verifying...' : 'Verify OTP'}
        </ValidateButton>

        <Timer>
          Didn’t receive OTP?{' '}
          {canResend ? (
            <ResendButton onClick={handleResendOTP}>Resend</ResendButton>
          ) : (
            <span>
              Resend in {Math.floor(timer / 60)}:{timer % 60 < 10 ? '0' : ''}
              {timer % 60}
            </span>
          )}
        </Timer>
      </OTPCard>
    </OTPContainer>
  );
};

export default ValidateOTP;
