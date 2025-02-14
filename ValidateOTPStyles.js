import styled from "styled-components";
import backgroundImage from "./images/login.png";

export const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  height: 100vh; /* Full viewport height */
  margin: 0 auto; /* Center horizontally */
  text-align: center;
  padding: 0 20px; /* Add padding for responsiveness */
  box-sizing: border-box; /* Ensure padding doesn't affect width */
  background: url(${backgroundImage}) no-repeat center center/cover; /* Add background here */
`;

export const OTPCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 20px 30px;
  width: 80%;
  max-width: 320px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

export const Logo = styled.div`
  img {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h2`
  font-size: 20px;
  color: #030401;
`;

export const Description = styled.p`
  color: #868c9a;
  margin: 10px 0;
`;

export const OTPInputs = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 15px;
  margin-top: 25px;
`;

export const OTPInput = styled.input`
  width: 40px;
  height: 40px;
  font-size: 24px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: black;
`;

export const MessagesContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 25px;
  padding: 10px 0; /* Add padding to ensure space for messages */
  min-height: 40px; /* Ensures there is a minimum height even when there's no message */
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: red;
  min-height: 10px; /* Adds space to ensure error message doesn't overlap other elements */
`;

export const SuccessMessage = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: green;
  min-height: 10px; /* Adds space for success message */
`;

export const ValidateButton = styled.button`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background: ${({ disabled }) =>
    disabled ? "#ccc" : "linear-gradient(to right, #668d12, #99cc33)"};
  color: ${({ disabled }) => (disabled ? "#888" : "white")};
  transition: background 0.3s ease;
`;

export const Timer = styled.p`
  font-size: 14px;
  margin-top: 10px;
  color: #868c9a;
`;

export const ResendButton = styled.span`
  color: #030401;
  text-decoration: underline;
  cursor: pointer;
`;
