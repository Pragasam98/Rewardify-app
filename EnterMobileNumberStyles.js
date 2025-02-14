import styled from "styled-components";
import backgroundImage from "./images/login.png";

// Styled components
export const LoginContainer = styled.div`
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

export const LoginCard = styled.div`
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

export const MobileInput = styled.input`
  width: 93%;
  padding: 10px;
  margin: 20px 0;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const ErrorContainer = styled.div`
  min-height: 30px; /* Adjust this value to suit your error message size */
  font-size: 12px;
  margin-top: 10px; /* Optional: adds space above the error container */
  text-align: left;
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: 0;
  color: red;
`;

export const OTPButton = styled.button`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background: ${(props) =>
    props.disabled || !props.mobileNumber
      ? "#e1e1e1"
      : "linear-gradient(to right, #668d12, #99cc33)"};
  color: ${(props) => (props.mobileNumber ? "white" : "#868c9a")};
`;

export const Terms = styled.p`
  font-size: 12px;
  color: #979797;
  margin-top: 15px;

  a {
    color: #000;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Spinner = styled.span`
  border: 2px solid transparent;
  border-top: 2px solid #000;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 1s linear infinite;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TermsWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
