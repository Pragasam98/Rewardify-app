import styled from "styled-components";
import backgroundImage from "./images/login.png";

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
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const Heading = styled.h2`
  font-size: 22px;
  color: #030401;
  margin: 10px 0;
`;

export const Description = styled.p`
  color: #868c9a;
  margin: 10px 0;
  white-space: normal;
  word-wrap: break-word;
  word-break: break-word;
  text-align: center;
  line-height: 1.5;
`;

export const CarouselDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 15px 0;
`;

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #e0e0e0;
  transition: background-color 0.3s;

  &.active {
    background-color: #030401;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;

  &.login {
    background: linear-gradient(to right, #668d12, #99cc33);
    color: white;
  }

  &.contact {
    background: white;
    color: #668d12;
    border: 1px solid #668d12;
  }
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
